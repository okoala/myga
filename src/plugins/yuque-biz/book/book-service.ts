import { AppConfig } from '@config';
import { yuqueApi } from '..';

export class BookService {
  // 获取用户 okrrr 的知识库
  async safeGetUserOkrrrBook() {
    const books = await yuqueApi.book.getBooks();
    const bookConfig = AppConfig.user.repo;
    let okrrrBook = books.find(book => book.slug === bookConfig.slug);
    if (okrrrBook) return okrrrBook;
    okrrrBook = await yuqueApi.book.createBook({
      slug: bookConfig.slug,
      name: bookConfig.name,
      description: bookConfig.description,
    });
    return okrrrBook;
  }
}

const bookService = new BookService();
export { bookService };
