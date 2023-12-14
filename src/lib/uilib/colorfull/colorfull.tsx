import styles from './colorfull.less';

export function Colorfull(props) {
  return (
    <>
      <style>{styles}</style>
      <div
        className={`okrrr-colorfull okrrr-colorfull-${props.color || 1} ${
          props.className
        }`}
      >
        {props.children}
      </div>
    </>
  );
}
