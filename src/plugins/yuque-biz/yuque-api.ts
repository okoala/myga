import { BookApi } from './book/book-api';
import { DocApi } from './doc/doc-api';

export class YuqueApi {
  private _book!: BookApi;
  private _doc!: DocApi;

  get book() {
    if (!this._book) {
      this._book = new BookApi();
    }
    return this._book;
  }

  get doc() {
    if (!this._doc) {
      this._doc = new DocApi();
    }
    return this._doc;
  }
}
