import { StyleProvider } from 'antd-style';

export function AntdStyleProvider(props) {
  return (
    <StyleProvider container={props.container || document.body}>
      {props.children}
    </StyleProvider>
  );
}
