import { AntdConfigProvider } from './providers/antd-config-provider';
import { AntdThemeProvider } from './providers/antd-theme-provider';
import { AntdStyleProvider } from './providers/antd-style-provider';

export function ThemeProvider(props) {
  return (
    <AntdConfigProvider>
      <AntdStyleProvider container={props.container}>
        <AntdThemeProvider>{props.children}</AntdThemeProvider>
      </AntdStyleProvider>
    </AntdConfigProvider>
  );
}
