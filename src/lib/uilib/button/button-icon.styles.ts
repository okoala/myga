import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  btn: css`
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}));

export { useStyles };
