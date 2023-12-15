import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  floatBox: css`
    right: 0;
    position: fixed;
    bottom: 200px;
    z-index: 1000;
  `,
  floatBtn: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    gap: 8px;
    width: 38px;
    height: 38px;
    padding: 0px 8px;
    border-radius: 32px;
    border: 1px solid #eaeaea;
    background-color: #fff;
    box-shadow: 0 3.2px 12px #00000014, 0 5px 25px #0000000a;
    transition: all 0.3s ease-in-out;
    z-index: 1;
    opacity: 0.4;
    flex-direction: row;
    justify-content: left;
    margin-right: -18px;

    &:hover {
      opacity: 1;
    }
  `,
  floatBtnIcon: css`
    width: 24px;
    height: 24px;
  `,
}));

export { useStyles };
