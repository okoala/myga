import { Button } from 'antd';
import { useStyles } from './button-icon.styles';

export function ButtonIcon(props) {
  const { styles } = useStyles();
  const { children, ...otherProps } = props;
  return (
    <Button {...otherProps} type="text" className={styles.btn}>
      {props.children}
    </Button>
  );
}
