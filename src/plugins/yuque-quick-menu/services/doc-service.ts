import { yuqueApi } from '@plugins/yuque-biz/yuque-api';
import { DocType } from '../../yuque-biz/interfaces/i-doc';

export class DocService {
  async createDocument(type: DocType, recentId: string) {
    let book;
    if (recentId) {
      const docs = await yuqueApi.doc.getRecentEditDocs();
      if (docs.length === 0) return;
      book = docs.find(d => String(d.id) === recentId)?.book;
      if (!book) return;
    } else {
      book = await yuqueApi.book.getLastestEditBook();
    }
    const doc = await yuqueApi.doc.createDoc(book.id, type);
    if (doc?.id) {
      window.location.href = `/go/doc/${doc.id}/edit`;
    }
  }
}
