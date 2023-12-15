import { ConfigProvider } from 'antd';

export function AntdConfigProvider(props) {
  return (
    <ConfigProvider
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
    </ConfigProvider>
  );
}
