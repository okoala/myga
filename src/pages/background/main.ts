import { AppBackground } from '@core/app-background';
import { QuickMenuBackgroundPlugin } from '@plugins/quick-menu/quick-menu-background-plugin';
import { YuqueRequestBackgroundPlugin } from '@plugins/yuque-request/yuque-request-background-plugin';

export function RunBackground() {
  const app = AppBackground.init({
    plugins: [YuqueRequestBackgroundPlugin, QuickMenuBackgroundPlugin],
  });

  return app.start();
}
