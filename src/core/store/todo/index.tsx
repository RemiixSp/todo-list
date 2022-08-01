import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TodoState, Task, Status } from './types';
import {
  getListedTasksFromLS,
  getDoneTasksFromLS,
} from '../../utils/getTasksFromLS';
import { filterNeededTask } from '../../utils/FilterNeededTask';
import { getPinOrUnpinTask } from '../../utils/pinTaskOrUnpin';
const initialState: TodoState = {
  listedTasks: getListedTasksFromLS(),
  doneTasks: getDoneTasksFromLS(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.listedTasks.push(action.payload);
    },
    finishTask: (state, action: PayloadAction<string>) => {
      const listedTasks = state.listedTasks.filter(
        (obj) => obj.description !== action.payload
      );
      const doneTasks = state.doneTasks.concat({
        description: action.payload,
        status: Status.DONE,
      });
      return {
        ...state,
        listedTasks,
        doneTasks,
      };
    },
    deleteTaskFromStorage: (state, action: PayloadAction<Task>) => {
      const listedTasks = filterNeededTask(state.listedTasks, action.payload);
      const doneTasks = filterNeededTask(state.doneTasks, action.payload);
      return {
        ...state,
        listedTasks,
        doneTasks,
      };
    },
    pinTask: (state, action: PayloadAction<Task>) => {
      let listedTasks = getPinOrUnpinTask(state.listedTasks, action.payload);

      return {
        ...state,
        listedTasks,
      };
    },
  },
});

export const { addTask, finishTask, deleteTaskFromStorage, pinTask } =
  todoSlice.actions;

export default todoSlice.reducer;
