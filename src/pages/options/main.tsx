import { AppSetting } from '@core/app-setting';
import { SettingManagePlugin } from '@plugins/setting-manage';

export function AppMain() {
  const app = AppSetting.init({
    plugins: [SettingManagePlugin],
  });

  return app.start();
}
