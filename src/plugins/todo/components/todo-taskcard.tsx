import { Progress } from 'antd';
import styles from './todo-taskcard.less';
import dayjs from 'dayjs';
import { useMemo } from 'react';

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
      <style>{styles}</style>
      <div className="okrrr-todo-taskcard-wrap">
        <div className="okrrr-todo-taskcard">
          <div className="okrrr-todo-taskcard-date">
            今天是 {date.year}年{date.month}月{date.monthOfDay}日, 星期
            {date.weekOfDay}
          </div>
          <div className="okrrr-todo-taskcard-main">
            <div className="okrrr-todo-taskcard-graph">
              <Progress
                type="circle"
                percent={0}
                showInfo={false}
                size="small"
              />
            </div>
            <div className="okrrr-todo-taskcard-status">
              <p className="okrrr-todo-taskcard-done">
                <span className="okrrr-todo-dot">・</span>已完成了 3 个任务
              </p>
              <p className="okrrr-todo-taskcard-missed">
                <span className="okrrr-todo-dot">・</span>2 个任务已经超期
              </p>
              <p className="okrrr-todo-taskcard-waiting">
                <span className="okrrr-todo-dot">・</span>1 个任务需要处理
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
