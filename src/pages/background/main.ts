import { AppBackground } from '@core/app-background';
import { YuqueRequestBackgroundPlugin } from '@plugins/yuque-request/yuque-request-background-plugin';

export function RunBackground() {
  const app = AppBackground.init({
    plugins: [YuqueRequestBackgroundPlugin],
  });

  return app.start();
}
