import { Progress } from 'antd';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useStyles } from './todo-taskcard.styles';

const chineseWeekOfDay = {
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
  7: '日',
};

export function TodoTaskcard(props) {
  const { styles } = useStyles();
  const date = useMemo(() => {
    const d = dayjs();
    return {
      year: d.get('year'),
      month: d.get('month') + 1,
      monthOfDay: d.get('date'),
      weekOfDay: chineseWeekOfDay[d.get('day')],
    };
  }, []);

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.card}>
          <div className={styles.date}>
            今天是 {date.year}年{date.month}月{date.monthOfDay}日, 星期
            {date.weekOfDay}
          </div>
          <div className={styles.main}>
            <div className={styles.graph}>
              <Progress
                type="circle"
                percent={0}
                showInfo={false}
                size="small"
              />
            </div>
            <div className={styles.status}>
              <p className={styles.statusDone}>・已完成了 3 个任务</p>
              <p className={styles.statusMissed}>・2 个任务已经超期</p>
              <p className={styles.statusWaiting}>・1 个任务需要处理</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
