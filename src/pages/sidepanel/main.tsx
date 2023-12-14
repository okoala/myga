import { AppSidepanel } from '@core/app-sidepanel';
import { SidebarSidepanelPlugin } from '@plugins/sidebar/sidebar-sidepanel-plugin';

export function AppMain() {
  const app = AppSidepanel.init({
    plugins: [SidebarSidepanelPlugin],
  });

  return app.start();
}
