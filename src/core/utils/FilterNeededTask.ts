import { Task } from '../store/todo/types';

export const filterNeededTask = (state: Task[], task: Task) => {
  return state.filter(
    (obj) => obj.description !== task.description || obj.status !== task.status
  );
};
