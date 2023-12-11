import { BackgroundMessagerRegistyOption } from '../interfaces/i-plugin';

type MessageSender = chrome.runtime.MessageSender;
type SendResponse = (response: any) => void;

export interface RequestMessage<T> {
  action: string;
  data: T;
}

// 内容插件管理
export class BackgroundManager {
  private readonly _messagers: BackgroundMessagerRegistyOption[] = [];

  registerBackgroundMessager = (messager: BackgroundMessagerRegistyOption) => {
    this._messagers.push(messager);
  };

  start = () => {
    // 不能用 async，不然成功返回信息
    chrome.runtime.onMessage.addListener(
      (
        _request: RequestMessage<any>,
        _sender: MessageSender,
        sendResponse: SendResponse,
      ) => {
        for (const messager of this._messagers) {
          if (messager.name === _request.action) {
            messager
              .handler(_request.data)
              .then(res => sendResponse(res))
              .catch(err => sendResponse(err));
            return true;
          }
        }
        // 返回true表示监听到消息后执行sendResponse，否则不会执行
        return true;
      },
    );
  };
}
