import { request } from '../request/request-proxy';
import { IUser } from '../interfaces/i-user';

export class UserApi {
  async getMine(): Promise<IUser> {
    const res: any = await request({
      url: `/api/mine`,
      config: {
        method: 'GET',
        // 缓存 24 小时
        cache: 24 * 60 * 60,
        data: {},
      },
    });
    return res?.data;
  }
}
