import styles from './todo.less';
import { TodoContainer } from './todo-container';
import { TodoEditor } from './todo-editor';

export function Todo() {
  return (
    <>
      <style>{styles}</style>
      <TodoContainer>
        <TodoEditor></TodoEditor>
      </TodoContainer>
    </>
  );
}
