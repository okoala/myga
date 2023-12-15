import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  menus: css`
    width: 168px;
    box-shadow: 0 8px 16px 4px rgb(0 0 0 / 5%) !important;
    border: 1px solid rgb(0 0 0 / 5%);
    border-radius: 8px !important;
    overflow: hidden;

    .ant-menu-item {
      padding: 0 10px !important;
    }

    .ant-menu-title-content {
      display: flex;
      align-items: center;
    }
  `,
  icon: css`
    width: 18px !important;
    height: 18px !important;
    max-width: 18px !important;
    margin-right: 5px !important;
  `,
}));

export { useStyles };
