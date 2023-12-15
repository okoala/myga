import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  entry: css`
    width: 100%;
    height: 100%;
    display: flex;
  `,
}));

export { useStyles };
