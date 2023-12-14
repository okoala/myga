import { yuqueApi } from '..';
import { IUser } from '../interfaces/i-user';

export class UserService {
  async getMine(): Promise<IUser> {
    return await yuqueApi.user.getMine();
  }

  async openHome() {
    const mine = await this.getMine();
    window.open('https://www.yuque.com/' + mine.login);
  }
}

const userService = new UserService();
export { userService };
