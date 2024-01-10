import {
  BackgroundActionRegistryOption,
  BackgroundMessagerRegistyOption,
  BackgroundContextMenuRegistryOption,
} from '../interfaces/i-plugin';

type MessageSender = chrome.runtime.MessageSender;
type SendResponse = (response: any) => void;

export interface BackgroundMessage<T> {
  action: string;
  data: T;
}

// 内容插件管理
export class BackgroundManager {
  private readonly _messagers: BackgroundMessagerRegistyOption[] = [];
  private readonly _actions: BackgroundActionRegistryOption[] = [];
  private readonly _contextMenus: BackgroundContextMenuRegistryOption[] = [];

  registerMessager = (messager: BackgroundMessagerRegistyOption) => {
    this._messagers.push(messager);
  };

  registerActionClicked = (action: BackgroundActionRegistryOption) => {
    this._actions.push(action);
  };

  registerContextMenusClicked = (
    contextMenu: BackgroundContextMenuRegistryOption,
  ) => {
    this._contextMenus.push(contextMenu);
  };

  start = () => {
    chrome.action.onClicked.addListener(tab => {
      for (const action of this._actions) {
        action.handler(tab);
      }
    });

    for (const contextMenu of this._contextMenus) {
      chrome.contextMenus.create({
        id: contextMenu.name,
        title: contextMenu.title,
        contexts: contextMenu.contexts,
      });
    }

    chrome.contextMenus.onClicked.addListener((info, tab) => {
      for (const contextMenu of this._contextMenus) {
        contextMenu.handler(info, tab);
      }
    });

    // 不能用 async，不然成功返回信息
    chrome.runtime.onMessage.addListener(
      (
        _request: BackgroundMessage<any>,
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

        // 如果没有发现就透传到 contentScript 中处理
        chrome.tabs
          .query({ active: true, lastFocusedWindow: true })
          .then(tabs => {
            const tabId = tabs[0].id;
            if (!tabId) {
              const err = new Error('no tab found');
              sendResponse(err);
              return;
            }
            chrome.tabs
              .sendMessage(tabId, _request)
              .then(res => {
                sendResponse(res);
              })
              .catch(err => sendResponse(err));
          })
          .catch(err => sendResponse(err));
        // 返回true表示监听到消息后执行sendResponse，否则不会执行
        return true;
      },
    );
  };
}
