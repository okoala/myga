import { request } from '@plugins/yuque-request';
import { getDefaultDocSlug, getDefaultTitle, getDocFormat } from '../util';

export class DocApi {
  async createDoc(book, docType) {
    const res: any = await request({
      url: `/api/docs`,
      config: {
        method: 'POST',
        data: {
          action: 'prependChild',
          body_draft_asl: null,
          book_id: book.id,
          format: getDocFormat(docType),
          insert_to_catalog: true,
          slug: getDefaultDocSlug(),
          status: 1,
          title: getDefaultTitle(docType),
          type: docType,
        },
      },
    });
    return res?.data;
  }
}
