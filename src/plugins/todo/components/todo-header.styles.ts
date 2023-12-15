import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  header: css`
    width: auto !important;
    border-radius: 10px !important;
    overflow: hidden !important;
    height: 140px !important;
    padding: 10px;
    margin: 20px;
  `,
  title: css`
    padding: 0px;
    margin: 0px;
    font-size: 18px;
    font-weight: normal;
  `,
  word: css`
    color: #2f2f2f;
  `,
}));

export { useStyles };
