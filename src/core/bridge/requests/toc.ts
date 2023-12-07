import { BackgroundEventEnum } from '@src/pages/background/interface';
import { ICallBridgeImpl } from '../interface';

export function createTocProxy(impl: ICallBridgeImpl) {
  return {
    get: async (): Promise<{ id: number }> => {
      return new Promise((resolve, rejected) => {
        impl(
          BackgroundEventEnum.Request,
          {
            // 固定位数据表知识库
            url: '/api/books/28052830/toc',
            config: {
              method: 'GET',
            },
          },
          res => {
            if (res?.status === 200) {
              resolve(res.data.data);
              return;
            }
            rejected(res);
          },
        );
      });
    },
  };
}
