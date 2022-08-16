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
      const newState = !state.darkMode;
      state.darkMode = newState;
      const json = JSON.stringify(newState);
      localStorage.setItem('themeMode', json);
    },
    turnOffDarkMode: (state) => {
      state.darkMode = false;
    },
  },
});

export const { changeMode, turnOffDarkMode } = authorizationSlice.actions;

export default authorizationSlice.reducer;
