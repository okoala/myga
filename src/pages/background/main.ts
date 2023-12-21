import { AppBackground } from '@core/app-background';
import { RapidApiBackgroundPlugin } from '@plugins/rapidapi/rapidapi-request-background-plugin';
import { SettingManageBackgroundPlugin } from '@plugins/setting-manage/setting-background-plugin';
import { YuqueRequestBackgroundPlugin } from '@plugins/yuque-request/yuque-request-background-plugin';

export function RunBackground() {
  const app = AppBackground.init({
    plugins: [
      YuqueRequestBackgroundPlugin,
      RapidApiBackgroundPlugin,
      SettingManageBackgroundPlugin,
    ],
  });

  return app.start();
}
