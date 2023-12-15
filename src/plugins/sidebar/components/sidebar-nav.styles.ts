import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  container: css`
    width: 61px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 10px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(0deg, #ececee 0%, #ececee 100%),
      radial-gradient(
        38.68% 67.15% at 96.22% 47.79%,
        rgba(192, 186, 255, 0.06) 14.47%,
        rgba(255, 94, 162, 0) 100%
      ),
      linear-gradient(197deg, #f2e9ed -7.27%, #e9eefb 38.85%, #f0eeea 85.4%);
  `,
  header: css`
    width: 100%;
    padding: 14px 0;
    column-gap: 7px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  close: css`
    padding: 4px;
    border-radius: 6px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #a2a2a2;
    transition: all 0.3s ease;

    &:hover {
      color: #7e7e7e;
      background-color: #e2e2e2;
    }
  `,
  nav: css`
    position: relative;
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  `,
  navItems: css`
    flex: 1;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
    overflow: hidden;
  `,
  navItem: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px 0;
    width: 100%;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
  `,
  navItemActive: css`
    background-color: rgba(255, 255, 255, 0.4);
  `,
  navItemTitle: css`
    margin-top: 4px;
    font-size: 12px;
  `,
  navItemIcon: css`
    transition: all 0.1s ease-in-out;
    width: 26px;
    height: 26px;

    img {
      width: 100%;
      height: 100%;
    }
  `,
  navFooter: css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 0 28px;
    row-gap: 17px;
  `,
  navFooterItems: css`
    -webkit-tap-highlight-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    position: relative;
  `,
  navFooterItem: css`
    display: flex;
    width: 28px;
    height: 28px;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
  `,
}));

export { useStyles };
