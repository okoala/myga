import { IAppSidepanelPlugin, SidepanelItemRegistyOption } from '@core';
import { ImageManage } from './components/image-manage';
import icon from '@assets/icons/image.svg';
import { pluginId, pluginName, pluginDesc } from './constants';

export class ImageSidepanelPlugin implements IAppSidepanelPlugin {
  readonly pluginId = pluginId;
  readonly pluginName = pluginName;
  readonly pluginDesc = pluginDesc;

  registerSidepanelItem(): SidepanelItemRegistyOption {
    return {
      id: 'image-manage',
      title: '图库',
      icon,
      RenderComponent: ImageManage,
    };
  }
}
