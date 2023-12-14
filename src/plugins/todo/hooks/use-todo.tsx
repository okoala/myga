import { useEffect, useState } from 'react';
import { todoService } from '../services/todo-service';

export function useTodo() {
  const [list, setList] = useState([]);

  useEffect(() => {
    todoService.safeGetData();
  }, []);

  return {
    list,
  };
}
