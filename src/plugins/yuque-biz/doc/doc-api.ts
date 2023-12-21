import { request } from '../request/request-proxy';
import { getDefaultDocSlug, getDefaultTitle, getDocFormat } from '../util';
import { DocType } from '../interfaces/i-doc';

export class DocApi {
  async createDoc(
    bookId: number,
    docType: DocType,
    docSlug?: string,
    docTitle?: string,
  ) {
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
          slug: docSlug || getDefaultDocSlug(),
          status: 1,
          title: docTitle || getDefaultTitle(docType),
          type: docType,
          public: 0, // 仅自己可见
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
        cache: 24 * 60 * 60,
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
