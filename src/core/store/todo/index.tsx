import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TodoState, Task, Status } from './types';
import { getTasksFromLS } from '../../utils/getTasksFromLS';
import { getPinOrUnpinTask, getFilteredTask, findById } from './utils';

const initialState: TodoState = {
  listedTasks: getTasksFromLS().listedTasks,
  doneTasks: getTasksFromLS().doneTasks,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    inizialization: (state) => {
      // const { listedTasks, doneTasks } = getTasksFromLS();
      // return {
      //   ...state,
      //   listedTasks,
      //   doneTasks,
      // };
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.listedTasks.push(action.payload);
    },

    finishTask: (state, action: PayloadAction<string>) => {
      const listedTasks = getFilteredTask(state.listedTasks, action.payload);
      const neededObj = findById(state.listedTasks, action.payload);
      const doneObj = { ...neededObj, status: Status.DONE };
      const doneTasks = [...state.doneTasks, doneObj];
      return {
        ...state,
        listedTasks,
        doneTasks,
      };
    },

    deleteTaskFromStorage: (state, action: PayloadAction<string>) => {
      const listedTasks = getFilteredTask(state.listedTasks, action.payload);
      const doneTasks = getFilteredTask(state.doneTasks, action.payload);
      return {
        ...state,
        listedTasks,
        doneTasks,
      };
    },

    pinTask: (state, action: PayloadAction<string>) => {
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
