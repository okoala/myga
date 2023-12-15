import { useStyles } from './todo-container.styles';

export function TodoContainer(props) {
  const { styles } = useStyles();
  return (
    <>
      <div className={styles.container}>{props.children}</div>
    </>
  );
}
