import { storage } from '@lib/hosts/storage';
import { ThemeMode } from '../interfaces/i-theme';
import { themeStoragekey } from '../constants';
import { EventEmitter } from 'eventemitter3';

export class ThemeService extends EventEmitter {
  swithTheme(theme: ThemeMode) {
    // 如果是选择跟随系统，就监控下系统的变化
    if (theme === 'auto') {
      this._addSystemThemeChangeEventListener();
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      this._handleSystemThemeChange(media);
    } else {
      this.emitThemeChange(theme);
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
    const theme = e.matches ? 'dark' : 'light';
    this.emitThemeChange(theme);
  };

  emitThemeChange(theme: ThemeMode) {
    return this.emit('themeChange', theme);
  }
}

const themeService = new ThemeService();
export { themeService };
