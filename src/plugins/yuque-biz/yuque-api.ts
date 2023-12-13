import { BookApi } from './book/book-api';
import { DocApi } from './doc/doc-api';
import { TableApi } from './table/table-api';
import { TranslateApi } from './translate/translate-api';
import { UserApi } from './user/user-api';

export class YuqueApi {
  private _book!: BookApi;
  private _doc!: DocApi;
  private _translate!: TranslateApi;
  private _table!: TableApi;
  private _user!: UserApi;

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

  get table() {
    if (!this._table) {
      this._table = new TableApi();
    }
    return this._table;
  }

  get user() {
    if (!this._user) {
      this._user = new UserApi();
    }
    return this._user;
  }
}

const yuqueApi = new YuqueApi();
export { yuqueApi };
