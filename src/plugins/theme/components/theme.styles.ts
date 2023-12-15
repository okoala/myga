import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  themeBtn: css`
    cursor: pointer;
  `,
  themeMenuItem: css`
    display: block;
    margin-left: -28px;
  `,
  themeMenuIcon: css`
    font-size: 16px;
  `,
  themeMenuItemName: css`
    font-weight: normal;
    margin-left: 16px;
  `,
  themeMenuItemChecked: css`
    position: absolute;
    right: 8px;
  `,
}));

export { useStyles };
