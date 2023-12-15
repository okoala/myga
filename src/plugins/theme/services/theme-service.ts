import { storage } from '@lib/hosts/storage';
import { ThemeEnum, ThemeSelectEnum } from '../interfaces/i-theme';
import { themeStoragekey } from '../constants';
import { EventEmitter } from 'eventemitter3';

export class ThemeService extends EventEmitter {
  async currentThemeSelect(): Promise<ThemeSelectEnum> {
    return (await storage.get(themeStoragekey)) || ThemeSelectEnum.default;
  }

  async isDarkSelect(): Promise<boolean> {
    return (await this.currentThemeSelect()) === ThemeSelectEnum.dark;
  }

  async isLightSelect(): Promise<boolean> {
    return (await this.currentThemeSelect()) === ThemeSelectEnum.default;
  }

  async isSystemSelect(): Promise<boolean> {
    return (await this.currentThemeSelect()) === ThemeSelectEnum.system;
  }

  swithTheme(select: ThemeSelectEnum) {
    storage.set(themeStoragekey, select);

    // 如果是选择跟随系统，就监控下系统的变化
    if (select === ThemeSelectEnum.system) {
      this._addSystemThemeChangeEventListener();
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      this._handleSystemThemeChange(media);
    } else {
      this.emitThemeChange(
        select === ThemeSelectEnum.dark ? ThemeEnum.dark : ThemeEnum.default,
      );
      this._removeSystemThemeChangeEventListener();
    }
  }

  private _addSystemThemeChangeEventListener() {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', this._handleSystemThemeChange);
  }

  private _removeSystemThemeChangeEventListener() {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', this._handleSystemThemeChange);
  }

  private _handleSystemThemeChange = e => {
    const theme = e.matches ? ThemeEnum.dark : ThemeEnum.default;
    this.emitThemeChange(theme);
  };

  emitThemeChange(theme: ThemeEnum) {
    return this.emit('themeChange', theme);
  }
}

const themeService = new ThemeService();
export { themeService };
