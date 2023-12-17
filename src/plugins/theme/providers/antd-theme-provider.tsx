import { ThemeProvider } from 'antd-style';
import { useTheme } from '../hooks/use-theme';

export function AntdThemeProvider(props) {
  const { theme } = useTheme();
  return (
    <ThemeProvider
      themeMode={theme}
      theme={{
        token: {
          colorPrimary: '#ff2372',
        },
        components: {
          Menu: {
            activeBarBorderWidth: 0,
          },
          Popover: {
            // @ts-ignore
            innerPadding: '6px',
          },
        },
      }}
    >
      {props.children}
    </ThemeProvider>
  );
}
