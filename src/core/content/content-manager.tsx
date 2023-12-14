import React from 'react';
import { Configuration } from '@core/configuration';
import {
  ContentRegistyOption,
  ContentMessagerRegistyOption,
} from '../interfaces/i-plugin';

type MessageSender = chrome.runtime.MessageSender;
type SendResponse = (response: any) => void;

export interface ContentMessage<T> {
  action: string;
  data: T;
}

// 内容插件管理
export class ContentPluginManager {
  private _configuration!: Configuration;
  private _renders: React.FC<any>[] = [];

  private readonly _messagers: ContentMessagerRegistyOption[] = [];

  registerMessager = (messager: ContentMessagerRegistyOption) => {
    this._messagers.push(messager);
  };

  registerRender = (
    renderOption: ContentRegistyOption,
    configuration: Configuration,
  ) => {
    this._configuration = configuration;
    this._renders.push(renderOption.RenderComponent);
  };

  startListen = () => {
    // 不能用 async，不然成功返回信息
    chrome.runtime.onMessage.addListener(
      (
        _request: ContentMessage<any>,
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

  getRender = () => {
    this.startListen();
    return this._renders.map(RenderComponent => {
      return <RenderComponent configuration={this._configuration} />;
    });
  };
}
