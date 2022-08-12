import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeType } from './types';

const initialState: ThemeType = {
  darkMode: false,
};

export const authorizationSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { changeMode } = authorizationSlice.actions;

export default authorizationSlice.reducer;
