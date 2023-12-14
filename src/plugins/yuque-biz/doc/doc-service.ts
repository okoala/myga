import { AppConfig } from '@config';
import { bookService, userService, yuqueApi } from '..';

export class DocService {
  async safeGetTableDoc(docSlug, docTitle) {
    const book = await bookService.safeGetUserOkrrrBook();
    const bookConfig = AppConfig.user.repo;
    const mine = await userService.getMine();
    let doc;
    try {
      doc = await yuqueApi.doc.getDocDetail(
        docSlug,
        bookConfig.slug,
        mine.login,
      );
    } catch (err) {}
    // 如果没有文档，就默认创建个
    if (!doc) {
      doc = await yuqueApi.doc.createDoc(book.id, 'Table', docSlug, docTitle);
    }
    return doc;
  }
}

const docService = new DocService();
export { docService };
