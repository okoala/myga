import { useState } from 'react';
import { FloatButton } from '@lib/uilib/float-button';
import logo from '@assets/logo/okrrr-48.png';
import styles from './todo.less';
import { TodoContainer } from './todo-container';
import { TodoEditor } from './todo-editor';

export function Todo() {
  const [showTodo, setShowTodo] = useState(false);
  const handleToggle = () => {
    if (showTodo) setShowTodo(false);
    else setShowTodo(true);
  };

  return (
    <>
      <style>{styles}</style>
      <TodoContainer show={showTodo} onClose={() => setShowTodo(false)}>
        <TodoEditor></TodoEditor>
      </TodoContainer>
      <FloatButton
        onClick={handleToggle}
        icon={<img src={logo} className="okrrr-todo-logo" />}
      />
    </>
  );
}
