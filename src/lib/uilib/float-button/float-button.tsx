import { useStyles } from './float-button.styles';

export function FloatButton(props) {
  const { styles } = useStyles();
  const { icon, ...otherProps } = props;
  return (
    <>
      <div className={styles.floatBox} {...otherProps}>
        <div className={styles.floatBtn}>
          <span className={styles.floatBtnIcon}>{props.icon}</span>
        </div>
      </div>
    </>
  );
}
