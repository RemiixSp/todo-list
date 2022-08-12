import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeType } from './types';

const initialState: ThemeType = {
  darkMode: false,
};

export const authorizationSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<string>) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { changeMode } = authorizationSlice.actions;

export default authorizationSlice.reducer;
