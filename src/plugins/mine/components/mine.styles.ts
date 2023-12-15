import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  avatar: css`
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 2px;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 0px 4px #c2c2c2;
    }
  `,
  link: css`
    cursor: pointer;
  `,
}));

export { useStyles };
