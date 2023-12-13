import styles from './float-button.less';

export function FloatButton(props) {
  const { icon, ...otherProps } = props;
  return (
    <>
      <style>{styles}</style>
      <div className="okrrr-float-btn-box" {...otherProps}>
        <div className="okrrr-float-btn">
          <span className="okrrr-float-btn-icon">{props.icon}</span>
        </div>
      </div>
    </>
  );
}
