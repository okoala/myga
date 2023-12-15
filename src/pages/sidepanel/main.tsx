import { AppSidepanel } from '@core/app-sidepanel';
import { AntdConfigProvider } from '@lib/antd/antd-config-provider';
import { MineSidepanelPlugin } from '@plugins/mine/mine-sidepanel-plugin';
import { SidebarSidepanelPlugin } from '@plugins/sidebar/sidebar-sidepanel-plugin';
import { ThemeSidepanelPlugin } from '@plugins/theme/theme-sidepanel-plugin';
import { TodoSidepanelPlugin } from '@plugins/todo/todo-sidepanel-plugin';

export function AppMain() {
  const app = AppSidepanel.init({
    plugins: [
      SidebarSidepanelPlugin,
      TodoSidepanelPlugin,
      ThemeSidepanelPlugin,
      MineSidepanelPlugin,
    ],
  });

  return <AntdConfigProvider>{app.start()}</AntdConfigProvider>;
}
