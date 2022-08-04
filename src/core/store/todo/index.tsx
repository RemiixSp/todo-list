import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TodoState, Task, Status } from './types';
import { getTasksFromLS } from '../../utils/getTasksFromLS';
import { getPinOrUnpinTask, getFilteredTask } from './utils';

const initialState: TodoState = {
  listedTasks: [],
  doneTasks: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    inizialization: (state) => {
      const listedTasks = getTasksFromLS().listedData;
      const doneTasks = getTasksFromLS().doneData;
      return {
        ...state,
        listedTasks,
        doneTasks,
      };
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.listedTasks.push(action.payload);
    },

    finishTask: (state, action: PayloadAction<Task>) => {
      const listedTasks = getFilteredTask(state.listedTasks, action.payload);
      const doneObj = { ...action.payload, status: Status.DONE };
      const doneTasks = [...state.doneTasks, doneObj];
      return {
        ...state,
        listedTasks,
        doneTasks,
      };
    },

    deleteTaskFromStorage: (state, action: PayloadAction<Task>) => {
      const listedTasks = getFilteredTask(state.listedTasks, action.payload);
      const doneTasks = getFilteredTask(state.doneTasks, action.payload);
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

export const {
  addTask,
  finishTask,
  deleteTaskFromStorage,
  pinTask,
  inizialization,
} = todoSlice.actions;

export default todoSlice.reducer;
