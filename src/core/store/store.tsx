import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo';
import dogReducer from './dog';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: { todo: todoReducer, dog: dogReducer },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
