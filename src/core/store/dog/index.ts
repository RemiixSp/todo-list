import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetcgDogType, initialState, Status } from './types';
import { fetchDog } from './asyncAction';

export const dogSlice = createSlice({
  name: 'doggy',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchDog.pending, (state) => {
      state.dogUrl = '';
      state.status = Status.LOADING;
    });

    builder.addCase(
      fetchDog.fulfilled,
      (state, action: PayloadAction<fetcgDogType>) => {
        state.dogUrl = action.payload.message;
        state.status = Status.SUCCESS;
      }
    );

    builder.addCase(fetchDog.rejected, (state) => {
      state.dogUrl = '';
      state.status = Status.FAILURE;
    });
  },
});

export default dogSlice.reducer;
