import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { initialState, ipType } from './types';
import { fetchIp } from './asyncAction';
import { Status } from '../types';
import { returnNewIp } from './utils';

export const ipSlice = createSlice({
  name: 'ip',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchIp.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(
      fetchIp.fulfilled,
      (state, action: PayloadAction<ipType>) => {
        state.ipInfo = returnNewIp(action);
        state.status = Status.SUCCESS;
      }
    );

    builder.addCase(fetchIp.rejected, (state) => {
      state.status = Status.FAILURE;
    });
  },
});

export default ipSlice.reducer;
