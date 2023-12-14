import { useEffect, useState } from 'react';
import { todoService } from '../services/todo-service';
import { ITodoList } from '../interfaces/i-todo';

export function useTodo() {
  const [list, setList] = useState<ITodoList>([]);

  useEffect(() => {
    todoService.safeGetData().then(res => setList(res));
  }, []);

  return {
    list,
  };
}
