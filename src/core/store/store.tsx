import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo';
import dogReducer from './dog';
import ipReducer from './ipFinder';
import factReducer from './facts';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    dog: dogReducer,
    ip: ipReducer,
    fact: factReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
