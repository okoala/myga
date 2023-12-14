import { request } from '@plugins/yuque-request';

export class TableApi {
  async getRecords(docId: number, sheetId: string) {
    const res: any = await request({
      url: `/api/modules/table/doc/TableRecordController/show`,
      config: {
        method: 'GET',
        // 缓存 24 小时
        cache: 24 * 60 * 60,
        data: {
          docId,
          docType: 'Doc',
          limit: 5000,
          offset: 0,
          sheetId,
        },
      },
    });
    return res;
  }

  async getTable(docId: number, sheetId: string) {
    const res: any = await request({
      url: `/api/modules/table/doc/TableController/show`,
      config: {
        method: 'GET',
        // 缓存 24 小时
        cache: 24 * 60 * 60,
        data: {
          docId,
          docType: 'Doc',
          sheetId,
        },
      },
    });
    return res;
  }
}
