import { sendMessage } from '@lib/hosts/message';
import { contentSidebarEventName } from '../constants';
import { OpenSidepanelMode } from '../interfaces/i-sidebar';

export class SidebarService {
  // 打开侧边栏
  // 默认采用iframe写入
  async openSidepanel(mode: OpenSidepanelMode = OpenSidepanelMode.iframe) {
    if (mode === OpenSidepanelMode.iframe) {
      await sendMessage(contentSidebarEventName, {
        isOpen: true,
      });
    }
  }

  async closeSidepanel() {
    await sendMessage(contentSidebarEventName, {
      isOpen: false,
    });
  }
}

const sidebarService = new SidebarService();
export { sidebarService };
