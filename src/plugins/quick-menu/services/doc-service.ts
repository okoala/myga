import { YuqueApi } from '@plugins/yuque-biz/yuque-api';
import { DocType } from '../../yuque-biz/interfaces/i-doc';

export class DocService {
  private readonly _yuqueApi!: YuqueApi;

  constructor(yuqueApi: YuqueApi) {
    this._yuqueApi = yuqueApi;
  }

  async createDocument(type: DocType) {
    const book = await this._yuqueApi.book.getLastestEditBook();
    if (!book) return;
    const doc = await this._yuqueApi.doc.createDoc(book.id, type);
    if (doc?.id) {
      window.location.href = `/go/doc/${doc.id}/edit`;
    }
  }
}
