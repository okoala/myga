import { AntdThemeProvider } from './providers/antd-theme-provider';
import { AntdStyleProvider } from './providers/antd-style-provider';

export function ThemeProvider(props) {
  return (
    <AntdThemeProvider>
      <AntdStyleProvider container={props.container}>
        {props.children}
      </AntdStyleProvider>
    </AntdThemeProvider>
  );
}
