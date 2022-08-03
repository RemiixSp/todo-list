import { Task } from '../store/todo/types';

export const getFilteredTask = (state: Task[], task: Task) => {
  return state.filter((obj) => obj.id !== task.id);
};
