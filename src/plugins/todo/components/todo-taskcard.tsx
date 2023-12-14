import { Progress } from 'antd';
import styles from './todo-taskcard.less';

export function TodoTaskcard(props) {
  return (
    <>
      <style>{styles}</style>
      <div className="okrrr-todo-taskcard-wrap">
        <div className="okrrr-todo-taskcard">
          <div className="okrrr-todo-taskcard-graph">
            <Progress type="circle" percent={0} showInfo={false} size="small" />
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
    </>
  );
}
