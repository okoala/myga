import { BookApi } from './book/book-api';
import { DocApi } from './doc/doc-api';
import { TranslateApi } from './translate/translate-api';

export class YuqueApi {
  private _book!: BookApi;
  private _doc!: DocApi;
  private _translate!: TranslateApi;

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

  get translate() {
    if (!this._translate) {
      this._translate = new TranslateApi();
    }
    return this._translate;
  }
}

const yuqueApi = new YuqueApi();
export { yuqueApi };
