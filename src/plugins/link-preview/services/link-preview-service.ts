import { yuqueApi } from '@plugins/yuque-biz/yuque-api';
import { ILink } from '../interfaces/i-link-preview';

class LinkPreviewService {
  async fetchDocDetail(url: string): Promise<ILink | null> {
    const pattern = new globalThis.URLPattern(
      'http{s}?://*.yuque.com/:user_login/:book_slug/:doc_slug',
    );
    const match = pattern.exec(url);
    if (!match) return null;
    const userLogin = match.pathname.groups.user_login;
    const bookSlug = match.pathname.groups.book_slug;
    const docSlug = match.pathname.groups.doc_slug;
    const docDetail = await yuqueApi.doc.getDocDetail(
      docSlug,
      bookSlug,
      userLogin,
    );
    if (!docDetail) return null;

    return {
      userLogin,
      bookSlug,
      docSlug,
      url,
      title: docDetail.title,
      cover: docDetail.cover,
      description: docDetail.custom_description || docDetail.description,
    };
  }
}

const linkPreviewService = new LinkPreviewService();
export { linkPreviewService, LinkPreviewService };
