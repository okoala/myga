import { request } from '@core/request';
import { DocType } from '../../yuque-biz/interfaces/i-doc';
import { uid } from '@lib/uid';

export class DocService {
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
