import { AppSidepanel } from '@core/app-sidepanel';

export function AppMain() {
  const app = AppSidepanel.init({
    plugins: [],
  });

  return app.start();
}
