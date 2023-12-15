import { ConfigProvider } from 'antd';

export function AntdConfigProvider(props) {
  return (
    <ConfigProvider
      theme={{
        components: {
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
