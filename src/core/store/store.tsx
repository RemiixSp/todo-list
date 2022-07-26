import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo';
import dogReducer from './dog';
import ipReducer from './ipFinder';
import factReducer from './facts';
import weatherReducer from './weather';
import loginReducer from './authorization';
import themeReducer from './theme';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    dog: dogReducer,
    ip: ipReducer,
    fact: factReducer,
    weather: weatherReducer,
    login: loginReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
