import { ThemeProvider } from 'antd-style';
import { useTheme } from '../hooks/use-theme';

export function AntdThemeProvider(props) {
  const { theme } = useTheme();
  return <ThemeProvider themeMode={theme}>{props.children}</ThemeProvider>;
}
