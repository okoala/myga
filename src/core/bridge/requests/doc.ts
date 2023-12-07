import { BackgroundEventEnum } from '../interface';
import { ICallBridgeImpl } from '../interface';

export function createDocProxy(impl: ICallBridgeImpl) {
  return {
    getDetail: async (docSlug: string): Promise<{ content: string }> => {
      return new Promise((resolve, rejected) => {
        impl(
          BackgroundEventEnum.Request,
          {
            // 固定位数据表知识库
            url: `/api/docs/${docSlug}`,
            config: {
              method: 'GET',
              data: { book_id: 28052830 },
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
