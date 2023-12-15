import { TodoContainer } from './todo-container';
import { TodoEditor } from './todo-editor';
import { TodoHeader } from './todo-header';
import { TodoTimeline } from './todo-timeline';
import { useTodo } from '../hooks/use-todo';
import { TodoTaskcard } from './todo-taskcard';

export function Todo() {
  const { list } = useTodo();
  return (
    <>
      <TodoContainer>
        <TodoHeader list={list} />
        <TodoTaskcard list={list} />
        <TodoTimeline list={list} />
        <TodoEditor />
      </TodoContainer>
    </>
  );
}
