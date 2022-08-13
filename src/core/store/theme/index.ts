import { createSlice } from '@reduxjs/toolkit';
import { getThemeFromLS } from './getThemeFromLS';
import { ThemeType } from './types';

const initialState: ThemeType = {
  darkMode: getThemeFromLS(),
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
