import { useState, useEffect } from 'react';
import { userService } from '@plugins/yuque-biz';
import type { IUser } from '@plugins/yuque-biz';
import { Colorfull } from '@lib/uilib/colorfull';
import styles from './todo-header.less';
import { useTodayword } from '../hooks/use-todayword';

export function TodoHeader(props) {
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
      <style>{styles}</style>
      <Colorfull className="okrrr-todo-header" color={new Date().getDay()}>
        <h1 className="okrrr-todo-header-title">Hi, {mine?.name}</h1>
        <p className="okrrr-todo-header-word">{word}</p>
      </Colorfull>
    </>
  );
}
