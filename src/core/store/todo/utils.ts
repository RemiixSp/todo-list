import { Task, Status } from './types';

export const findById = (state: Task[], action: string) =>
  state.find((obj) => obj.id === action) as unknown as Task;

export const getFilteredTask = (state: Task[], action: string) =>
  state.filter((obj) => obj.id !== action);

export const getPinOrUnpinTask = (state: Task[], id: string) => {
  const neededObj = findById(state, id);

  if (neededObj.status === Status.LISTED) {
    const newPinObj = {
      ...neededObj,
      status: Status.PINNED,
    };

    const listedTasks = [newPinObj, ...getFilteredTask(state, id)];
    return listedTasks;
  } else {
    const newUnpinObj = {
      ...neededObj,
      status: Status.LISTED,
    };
    const listedTasks = [...getFilteredTask(state, id), newUnpinObj];

    return listedTasks;
  }
};
