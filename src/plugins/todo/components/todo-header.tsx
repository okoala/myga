import { useState, useEffect } from 'react';
import { userService } from '@plugins/yuque-biz';
import type { IUser } from '@plugins/yuque-biz';
import { Colorfull } from '@lib/uilib/colorfull';
import { useTodayword } from '../hooks/use-todayword';
import { useStyles } from './todo-header.styles';

export function TodoHeader(props) {
  const { styles } = useStyles();
  const [mine, setMine] = useState<IUser>();
  const { word } = useTodayword();

  useEffect(() => {
    userService.getMine().then(_mine => {
      if (_mine) {
        setMine(_mine);
      }
    });
  }, []);

  return (
    <>
      <Colorfull className={styles.header} color={new Date().getDay()}>
        <h1 className={styles.title}>Hi, {mine?.name}</h1>
        <p className={styles.word}>{word}</p>
      </Colorfull>
    </>
  );
}
