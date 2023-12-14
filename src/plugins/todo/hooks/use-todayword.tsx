import { useEffect, useState } from 'react';
import { todoService } from '../services/todo-service';

export function useTodayword() {
  const [word, setWord] = useState();

  useEffect(() => {
    todoService.getPiritWords().then(words => {
      if (words && words.length > 0) {
        const todayWord = todoService.getTodayWord(words);
        setWord(todayWord);
      }
    });
  }, []);

  return {
    word,
  };
}
