import { useState, useEffect } from 'react';
import { todoService } from '../services/todo-service';
import { userService } from '@plugins/yuque-biz';
import type { IUser } from '@plugins/yuque-biz';
import { Colorfull } from '@lib/uilib/colorfull';
import styles from './todo-header.less';

export function TodoHeader(props) {
  const [word, setWord] = useState('');
  const [mine, setMine] = useState<IUser>();

  useEffect(() => {
    const _word = todoService.getTodayWord();
    if (_word) setWord(_word);

    userService.getMine().then(_mine => {
      if (_mine) {
        setMine(_mine);
      }
    });
  }, []);

  return (
    <>
      <style>{styles}</style>
      <Colorfull className="okrrr-todo-header" color={1}>
        <h1 className="okrrr-todo-header-title">{mine?.name}</h1>
        <p className="okrrr-todo-header-word">{word}</p>
      </Colorfull>
    </>
  );
}
