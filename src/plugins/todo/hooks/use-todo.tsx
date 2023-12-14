import { useEffect, useState } from 'react';

export function useTodo() {
  const [list, setList] = useState([]);

  useEffect(() => {}, []);

  return {
    list,
  };
}
