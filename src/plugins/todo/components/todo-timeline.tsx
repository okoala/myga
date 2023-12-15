import { Timeline } from 'antd';
import { useStyles } from './todo-timeline.styles';

export function TodoTimeline(props) {
  const { styles } = useStyles();
  return (
    <>
      <div className={styles.timeline}>
        <h2 className={styles.title}>今日任务</h2>
        <Timeline
          mode={'left'}
          items={[
            {
              label: '08:12:11',
              children: 'Create a services',
            },
            {
              label: '09:12:11',
              children: 'Solve initial network problems',
            },
            {
              children: 'Technical testing',
            },
            {
              label: '09:12:11',
              children: 'Network problems being solved',
            },
          ]}
        />
      </div>
    </>
  );
}
