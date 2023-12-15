import { useStyles } from './colorfull.styles';

export function Colorfull(props) {
  const { styles, cx } = useStyles();
  return (
    <>
      <div
        className={cx(styles.colorfull, props.className, {
          [styles.colorfull1]: props.color === 1,
          [styles.colorfull2]: props.color === 2,
          [styles.colorfull3]: props.color === 3,
          [styles.colorfull4]: props.color === 4,
          [styles.colorfull5]: props.color === 5,
          [styles.colorfull6]: props.color === 6,
          [styles.colorfull7]: props.color === 7,
        })}
      >
        {props.children}
      </div>
    </>
  );
}
