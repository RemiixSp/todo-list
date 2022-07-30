import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TodoState, Task } from './types';

const initialState: TodoState = {
  listedTasks: [],
  doneTasks: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {},
  },
});

export const { addTask } = todoSlice.actions;

export default todoSlice.reducer;
