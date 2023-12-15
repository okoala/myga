import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  menuItem: css`
    display: block;
    margin-left: -10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  menuIcon: css`
    font-size: 16px;
    display: flex;
  `,
  menuItemName: css`
    font-weight: normal;
    margin-left: 6px;
    margin-right: 10px;
  `,
  menuItemChecked: css`
    position: absolute;
    right: 8px;
  `,
}));

export { useStyles };
