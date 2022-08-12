import { createSlice } from '@reduxjs/toolkit';
import { AuthType } from './types';

const initialState: AuthType = {
  isAuthorized: false,
};

export const authorizationSlica = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthorized = true;
    },
    signOut: (state) => {
      state.isAuthorized = false;
    },
  },
});

export const { login, signOut } = authorizationSlica.actions;

export default authorizationSlica.reducer;
