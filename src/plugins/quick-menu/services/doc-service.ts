import { DocType } from '../interfaces/i-doc';

export class DocService {
  // 获取最近编辑的知识库
  static getRecentBookNS() {
    const links = document.querySelectorAll('[data-testid="adapter-link"]');
    for (const link of links) {
      if (link.className.startsWith('index-module_bookTitle')) {
        return link.getAttribute('href');
      }
    }
  }

  static createDocument(type: DocType) {}
}
