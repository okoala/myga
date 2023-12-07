import { ajax } from '@core/request';
import { BackgroundEventEnum } from '@core/interfaces/i-background';
import { BackgroundRegistyOption } from '../interfaces/i-plugin';

type MessageSender = chrome.runtime.MessageSender;
type SendResponse = (response: any) => void;

export interface RequestMessage<T> {
  action: string;
  data: T;
}

// 内容插件管理
export class BackgroundManager {
  registerBackground = (option: BackgroundRegistyOption) => {};

  start = () => {
    // 不能用 async，不然成功返回信息
    chrome.runtime.onMessage.addListener(
      (
        _request: RequestMessage<any>,
        _sender: MessageSender,
        sendResponse: SendResponse,
      ) => {
        switch (_request.action) {
          case BackgroundEventEnum.Request: {
            const { url, config, options = {} } = _request.data;
            ajax(url, config, options)
              .then(res => sendResponse(res))
              .catch(err => sendResponse(err));
            break;
          }
        }
        // 返回true表示监听到消息后执行sendResponse，否则不会执行
        return true;
      },
    );
  };
}
