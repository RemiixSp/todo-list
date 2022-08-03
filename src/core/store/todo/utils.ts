import { Task, Status } from './types';

export const getFilteredTask = (state: Task[], task: Task) =>
  state.filter((obj) => obj.id !== task.id);

export const getPinOrUnpinTask = (state: Task[], action: Task) => {
  if (action.status === Status.LISTED) {
    const newPinObj = {
      id: action.id,
      description: action.description,
      status: Status.PINNED,
    };
    const listedTasks = [newPinObj, ...getFilteredTask(state, action)];
    return listedTasks;
  } else {
    const newUnpinObj = {
      id: action.id,
      description: action.description,
      status: Status.LISTED,
    };
    const listedTasks = [...getFilteredTask(state, action), newUnpinObj];

    return listedTasks;
  }
};
