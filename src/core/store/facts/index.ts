import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../types';
import { fetchFactType, initialState } from './types';
import { fetchFact } from './asyncAction';

export const factSlice = createSlice({
  name: 'facts',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchFact.pending, (state) => {
      state.randomCatFact = '';
      state.status = Status.LOADING;
    });

    builder.addCase(
      fetchFact.fulfilled,
      (state, action: PayloadAction<fetchFactType>) => {
        state.randomCatFact = action.payload.fact;
        state.status = Status.SUCCESS;
      }
    );

    builder.addCase(fetchFact.rejected, (state) => {
      state.randomCatFact = '';
      state.status = Status.FAILURE;
    });
  },
});

export default factSlice.reducer;
