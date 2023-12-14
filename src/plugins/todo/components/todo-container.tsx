import styles from './todo-container.less';

export function TodoContainer(props) {
  return (
    <>
      <style>{styles}</style>
      <div className="okrrr-todo-container">{props.children}</div>
    </>
  );
}
