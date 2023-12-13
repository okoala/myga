// import styles from './todo-editor.less';

import { TodoHeader } from './todo-header';
import { TodoTimeline } from './todo-timeline';

export function TodoEditor() {
  return (
    <>
      {/* <style>{styles}</style> */}
      <TodoHeader />
      <TodoTimeline />
    </>
  );
}
