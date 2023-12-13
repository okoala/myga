import { yuqueApi } from '..';
import { IUser } from '../interfaces/i-user';

export class UserService {
  async getMine(): Promise<IUser> {
    return await yuqueApi.user.getMine();
  }
}

const userService = new UserService();
export { userService };
