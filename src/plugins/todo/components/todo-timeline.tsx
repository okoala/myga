import { Timeline } from 'antd';
import styles from './todo-timeline.less';

export function TodoTimeline(props) {
  return (
    <>
      <style>{styles}</style>
      <div className="okrrr-todo-timeline">
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
