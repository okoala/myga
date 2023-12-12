import { yuqueApi } from '@plugins/yuque-biz/yuque-api';
import { DocType } from '../../yuque-biz/interfaces/i-doc';

export class DocService {
  async createDocument(type: DocType) {
    const book = await yuqueApi.book.getLastestEditBook();
    if (!book) return;
    const doc = await yuqueApi.doc.createDoc(book.id, type);
    if (doc?.id) {
      window.location.href = `/go/doc/${doc.id}/edit`;
    }
  }
}
