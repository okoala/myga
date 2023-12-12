import { request } from '@plugins/yuque-request';
import { getDefaultDocSlug, getDefaultTitle, getDocFormat } from '../util';

export class DocApi {
  async createDoc(bookId: number, docType) {
    const res: any = await request({
      url: `/api/docs`,
      config: {
        method: 'POST',
        data: {
          action: 'prependChild',
          body_draft_asl: null,
          book_id: bookId,
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

  // 获取文档详情
  async getDocDetail(docSlug: string, bookSlug: string, userLogin: string) {
    const res: any = await request({
      url: `/api/docs/${docSlug}`,
      config: {
        method: 'GET',
        data: {
          user_login: userLogin,
          book_slug: bookSlug,
          merge_dynamic_data: false,
          include_contributors: false,
          include_like: false,
          include_hits: false,
        },
      },
    });
    return res?.data;
  }
}
