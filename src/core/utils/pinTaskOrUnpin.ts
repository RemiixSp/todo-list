import { Status, Task } from '../store/todo/types';
import { filterNeededTask } from './FilterNeededTask';
export const getPinOrUnpinTask = (state: Task[], action: Task) => {
  if (action.status === Status.LISTED) {
    const newPinObj = {
      description: action.description,
      status: Status.PINNED,
    };
    const listedTasks = [newPinObj, ...filterNeededTask(state, action)];
    return listedTasks;
  } else {
    const newUnpinObj = {
      description: action.description,
      status: Status.LISTED,
    };
    const listedTasks = [...filterNeededTask(state, action), newUnpinObj];

    return listedTasks;
  }
};
