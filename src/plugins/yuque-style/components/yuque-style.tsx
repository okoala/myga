import { useEffect } from 'react';
import styles from './heti.css';

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
