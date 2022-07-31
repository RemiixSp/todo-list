import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TodoState, Task, Status } from './types';
import {
  getListedTasksFromLS,
  getDoneTasksFromLS,
} from '../../utils/getTasksFromLS';

const initialState: TodoState = {
  listedTasks: getListedTasksFromLS(),
  doneTasks: getDoneTasksFromLS(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      const isAdded = state.listedTasks.find(
        (obj) => obj.description === action.payload.description
      );
      if (!isAdded) {
        state.listedTasks.push(action.payload);
      }
    },
    finishTask: (state, action: PayloadAction<string>) => {
      const listedTasks = state.listedTasks.filter(
        (obj) => obj.description !== action.payload
      );
      const task: Task = {
        description: action.payload,
        status: Status.DELETED,
      };
      const doneTasks = state.doneTasks.concat(task);
      return {
        ...state,
        listedTasks,
        doneTasks,
      };
    },
  },
});

export const { addTask, finishTask } = todoSlice.actions;

export default todoSlice.reducer;
