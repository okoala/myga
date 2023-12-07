import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';
import { BackgroundEventEnum } from './interface';
import { request } from './request';

reloadOnUpdate('pages/background');
/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate('pages/content/style.less');

type MessageSender = chrome.runtime.MessageSender;

type SendResponse = (response: any) => void;

export interface RequestMessage<T> {
  action: BackgroundEventEnum;
  data: T;
}

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
        request(url, config, options)
          .then(res => sendResponse(res))
          .catch(err => sendResponse(err));
        break;
      }
    }
    // 返回true表示监听到消息后执行sendResponse，否则不会执行
    return true;
  },
);
