import { useEffect } from 'react';
import { TodoState } from '../../core/store/todo/types';

const useLocalStorage = (tasks: TodoState) => {
  useEffect(() => {
    const json = JSON.stringify(tasks);
    localStorage.setItem('todos', json);
    console.log(localStorage.getItem('todos') + 'in use effect');
  }, [tasks]);
};
export default useLocalStorage;
