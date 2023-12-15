import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => ({
  timeline: css`
    margin-top: 30px;

    .ant-timeline {
      margin-left: -180px;
    }

    .ant-timeline.ant-timeline-label
      .ant-timeline-item-left
      .ant-timeline-item-content {
      width: calc(50% - 40px);
    }
  `,
  title: css`
    font-weight: 500;
    font-size: 16px;
    margin: 0 24px 22px;
  `,
}));

export { useStyles };
