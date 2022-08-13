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
    turnOffDarkMode: (state) => {
      state.darkMode = false;
    },
  },
});

export const { changeMode, turnOffDarkMode } = authorizationSlice.actions;

export default authorizationSlice.reducer;
