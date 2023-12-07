import { request } from '@core/request';
import { DocType } from '../interfaces/i-doc';
import { uid } from '@lib/uid';

export class DocService {
  getDocSlug() {
    return uid(16);
  }

  getDefaultTitle(type: DocType) {
    if (type === 'Doc') return '无标题文档';
    if (type === 'Sheet') return '无标题表格';
    if (type === 'Board') return '无标题画板';
    if (type === 'Table') return '无标题数据表';
  }

  getDocFormat(type: DocType) {
    if (type === 'Doc') return 'lake';
    if (type === 'Sheet') return 'lakesheet';
    if (type === 'Board') return 'lakeboard';
    if (type === 'Table') return 'laketable';
  }

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

  async createDocument(type: DocType) {
    const book = await this.getLastestEditBook();
    if (!book) return;
    const res: any = await request({
      url: `/api/docs`,
      config: {
        method: 'POST',
        data: {
          action: 'prependChild',
          body_draft_asl: null,
          book_id: book.id,
          format: this.getDocFormat(type),
          insert_to_catalog: true,
          slug: this.getDocSlug(),
          status: 1,
          title: this.getDefaultTitle(type),
          type,
        },
      },
    });
    if (res?.data?.id) {
      window.location.href = `/go/doc/${res.data.id}/edit`;
    }
  }
}
