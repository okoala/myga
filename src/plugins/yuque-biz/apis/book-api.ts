import { request } from '@core/request';

export class BookApi {
  async getLastestEditBook() {
    const res: any = await request({
      url: '/api/recent/list',
      config: {
        method: 'GET',
        data: {
          offset: 0,
          limit: 1,
          action: 'Edit',
          type: 'Doc',
        },
      },
    });

    return res?.data?.list?.[0]?.book;
  }
}
