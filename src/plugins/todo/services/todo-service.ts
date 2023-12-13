import { AppConfig } from '@config';
import { getTexts, yuqueApi } from '@plugins/yuque-biz';

export class TodoService {
  private _words: string[] = [];

  constructor() {
    this.init();
  }

  async init() {
    const piritwords = AppConfig.official.docs.piritwords;
    const res: any = await yuqueApi.table.getRecords(
      piritwords.id,
      piritwords.sheetId,
    );
    if (!res) return;
    const texts = getTexts(res.records);
    this._words = texts;
  }

  getPiritWords() {
    return this._words;
  }

  getTodayWord() {
    return this._words[Math.floor(Math.random() * this._words.length)];
  }
}

const todoService = new TodoService();
export { todoService };
