import { AppBackground } from '@core/app-background';
import { QuickMenuBackgroundPlugin } from '@plugins/quick-menu/quick-menu-background-plugin';

export function RunBackground() {
  const app = AppBackground.init({
    plugins: [QuickMenuBackgroundPlugin],
  });

  return app.start();
}
