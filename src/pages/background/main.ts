import { AppBackground } from '@core/app-background';
import { RapidApiBackgroundPlugin } from '@plugins/rapidapi/rapidapi-request-background-plugin';
import { SettingManageBackgroundPlugin } from '@plugins/setting-manage/setting-background-plugin';
import { YuqueBizBackgroundPlugin } from '@plugins/yuque-biz/yuque-biz-background-plugin';

export function RunBackground() {
  const app = AppBackground.init({
    plugins: [
      YuqueBizBackgroundPlugin,
      RapidApiBackgroundPlugin,
      SettingManageBackgroundPlugin,
    ],
  });

  return app.start();
}
