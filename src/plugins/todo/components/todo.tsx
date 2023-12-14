import styles from './todo.less';
import { TodoContainer } from './todo-container';
import { TodoEditor } from './todo-editor';
import { TodoHeader } from './todo-header';
import { TodoTimeline } from './todo-timeline';
import { useTodo } from '../hooks/use-todo';

export function Todo() {
  const { list } = useTodo();

  return (
    <>
      <style>{styles}</style>
      <TodoContainer>
        <TodoHeader list={list} />
        <TodoTimeline list={list} />
        <TodoEditor />
      </TodoContainer>
    </>
  );
}
