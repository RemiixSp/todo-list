import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthType } from './types';
import { getUserFromLS } from './getUserFromLS';

const initialState: AuthType = {
  isAuthorized: getUserFromLS().isAuthorized,
  userName: getUserFromLS().userName,
};

export const authorizationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthorized = true;
      state.userName = action.payload;
    },
    signOut: (state) => {
      state.isAuthorized = false;
      state.userName = '';
    },
  },
});

export const { login, signOut } = authorizationSlice.actions;

export default authorizationSlice.reducer;
