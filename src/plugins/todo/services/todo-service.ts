import { AppConfig } from '@config';
import { tableService, getTexts, yuqueApi } from '@plugins/yuque-biz';
import { todoDocTitle, todoDocSlug } from '../constants';

export class TodoService {
  private _table!: any;

  // 获取激励池
  async getPiritWords() {
    const piritwords = AppConfig.official.docs.piritwords;
    const res: any = await yuqueApi.table.getRecords(
      piritwords.id,
      piritwords.sheetId,
    );
    if (!res) return;
    return getTexts(res.records);
  }

  // 获取数据
  async safeGetData() {
    this._table = await tableService.safeGetUserOkrrrTable(
      todoDocSlug,
      todoDocTitle,
    );
    console.log('====', this._table);
    return this._table;
  }

  getTodayWord(words) {
    return words[Math.floor(Math.random() * words.length)];
  }
}

const todoService = new TodoService();
export { todoService };
