import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TodoState, Task } from './types';
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
  },
});

export const { addTask } = todoSlice.actions;

export default todoSlice.reducer;
