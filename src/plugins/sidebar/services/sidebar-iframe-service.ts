import { getPageURL } from '@lib/hosts/runtime';
import { sidebarIframeId } from '../constants';
import { sidepanelPage } from '@manifest';
import { getRootContaner } from '@lib/dom';

export class SidebarIframeService {
  private _getStyles() {
    return `
      #${sidebarIframeId} {
        display: none;
        border: none;
        margin: 0;
        padding: 0;
        min-height: 0;
        min-width: 0;
        overflow: hidden;
        position: fixed;
        transition: initial;
        max-width: 418px;
        max-height: 100vh;
        width: 418px;
        height: 100vh;
        right: 0;
        top: 0;
        z-index: 2147483645;
        color-scheme: none;
        user-select: none;
      }
      #${sidebarIframeId}.show {
        display: block;
        color-scheme: auto;
      }
    `;
  }

  inject() {
    const rootContainer = getRootContaner();
    // 先注入 iframe 对样式
    const style = document.createElement('style');
    style.textContent = this._getStyles();
    rootContainer.appendChild(style);
    // 创建 iframe
    const iframe = document.createElement('iframe');
    iframe.src = getPageURL(sidepanelPage);
    iframe.id = sidebarIframeId;
    rootContainer.appendChild(iframe);
  }
}

const sidebarIframeService = new SidebarIframeService();
export { sidebarIframeService };
