import styles from './todo-container.less';
import { useEffect, useState } from 'react';

export function TodoContainer(props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  if (!show) return null;
  return (
    <>
      <style>{styles}</style>
      <div className="okrrr-todo-container">{props.children}</div>
    </>
  );
}
