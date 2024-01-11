import { useLunar } from './use-lunar';
import styles from './calendar.less';
import { useEffect } from 'react';

export function YuqueTableCalendar() {
  useEffect(() => {
    const id = 'okrrr-yuque-table-style';
    if (!document.querySelector('#' + id)) {
      const el = document.createElement('style');
      el.id = id;
      el.innerHTML = styles;
      document.head.appendChild(el);
    }
  }, []);

  useLunar();

  return <></>;
}
