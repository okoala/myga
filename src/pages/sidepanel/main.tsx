import { AppSidepanel } from '@core/app-sidepanel';
import { SidebarSidepanelPlugin } from '@plugins/sidebar/sidebar-sidepanel-plugin';
import { TodoSidepanelPlugin } from '@plugins/todo/todo-sidepanel-plugin';

export function AppMain() {
  const app = AppSidepanel.init({
    plugins: [SidebarSidepanelPlugin, TodoSidepanelPlugin],
  });

  return app.start();
}
