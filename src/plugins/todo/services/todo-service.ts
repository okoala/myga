import { AppConfig } from '@config';
import { tableService, getTexts, yuqueApi } from '@plugins/yuque-biz';
import { todoDocTitle, todoDocSlug } from '../constants';
import { ITodoItem, ITodoList } from '../interfaces/i-todo';

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
  async safeGetData(): Promise<ITodoList> {
    this._table = await tableService.safeGetUserOkrrrTable(
      todoDocSlug,
      todoDocTitle,
    );
    return this.transform(this._table);
  }

  // 转成数据表数据为待办可读的数据
  transform(table: any): ITodoList {
    console.log('====', table);
    const list: ITodoList = [];
    const { records } = table;
    const { columns } = table.sheet[0];

    let contentColumn, statusColumn, timeColumn;
    for (const column of columns) {
      if (
        column.type === 'text' ||
        column.type === 'input' ||
        column.type === 'textarea'
      ) {
        contentColumn = column;
        continue;
      }
      if (column.type === 'select') {
        statusColumn = column;
        continue;
      }
      if (column.type === 'date') {
        timeColumn = column;
        continue;
      }
    }

    const toTodoStatus = optionName => {
      if (optionName === '已完成') return 'done';
      if (optionName === '进行中') return 'doing';
      return 'waiting';
    };

    for (const record of records) {
      const data = JSON.parse(record.data);
      const content = data[contentColumn.id]?.value;
      if (!content) continue;

      const todoItem: ITodoItem = {
        recordId: record.uuid,
        content: content,
        status: toTodoStatus(
          statusColumn.options.find(
            opt => opt.id === data[statusColumn.id]?.value,
          )?.name,
        ),
        planAt: data[timeColumn.id]?.value,
        createdAt: record.created_at,
        updatedAt: record.updated_at,
      };
      list.push(todoItem);
    }

    return list;
  }

  getTodayWord(words) {
    return words[Math.floor(Math.random() * words.length)];
  }
}

const todoService = new TodoService();
export { todoService };
