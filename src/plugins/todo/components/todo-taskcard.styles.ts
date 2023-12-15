import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  wrap: css`
    display: flex;
    justify-content: center;
    margin-top: -80px;
  `,
  card: css`
    display: flex;
    width: 70%;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 10px 14px;
    flex-direction: column;
  `,
  date: css`
    margin-bottom: 20px;
    color: #5e5e5e;
  `,
  main: css`
    display: flex;
  `,
  graph: css`
    width: 60px;
    margin-right: 24px;
  `,
  status: css`
    display: flex;
    flex-flow: column;
    font-size: 13px;
  `,
  statusDone: css`
    color: #2c5bcc;
    margin: 0;
    margin-bottom: 5px;
  `,
  statusMissed: css`
    color: #c2292e;
    margin: 0;
    margin-bottom: 5px;
  `,
  statusWaiting: css`
    color: #f8c631;
    margin: 0;
  `,
}));

export { useStyles };
