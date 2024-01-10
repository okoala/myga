import { AppBackground } from '@core/app-background';
import { ImageManageBackgroundPlugin } from '@plugins/image-manage/image-background-plugin';
import { RapidApiBackgroundPlugin } from '@plugins/rapidapi/rapidapi-request-background-plugin';
import { SettingManageBackgroundPlugin } from '@plugins/setting-manage/setting-background-plugin';
import { YuqueBizBackgroundPlugin } from '@plugins/yuque-biz/yuque-biz-background-plugin';

export function RunBackground() {
  const app = AppBackground.init({
    plugins: [
      YuqueBizBackgroundPlugin,
      RapidApiBackgroundPlugin,
      SettingManageBackgroundPlugin,
      ImageManageBackgroundPlugin,
    ],
  });

  return app.start();
}
