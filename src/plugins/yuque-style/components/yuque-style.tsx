import { useEffect } from 'react';
import styles from './beautify.less';

export function YuqueStyle() {
  useEffect(() => {
    const id = 'okrrr-yuque-style';
    if (!document.querySelector('#' + id)) {
      const el = document.createElement('style');
      el.id = id;
      el.innerHTML = styles;
      document.head.appendChild(el);
    }
  }, []);

  return <></>;
}
