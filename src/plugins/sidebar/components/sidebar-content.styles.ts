import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  content: css`
    display: flex;
    position: relative;
    flex: 1;
    min-width: 0px;
    height: 100%;
    background-color: rgb(255 255 255 / 40%);
    text-emphasis-color: rgba(251, 245, 236, 0.9);
  `,
  render: css`
    width: 100%;
    height: 100%;
    position: relative;
  `,
}));

export { useStyles };
