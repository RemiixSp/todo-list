import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../types';
import { BreedType, factProps, FetchFactType } from './types';
import { fetchFact, fetchBreeds } from './asyncAction';

export const initialState: factProps = {
  randomCatFact: '',
  breeds: [],
  status: Status.LOADING,
};

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
      (state, action: PayloadAction<FetchFactType>) => {
        state.randomCatFact = action.payload.fact;
        state.status = Status.SUCCESS;
      }
    );

    builder.addCase(fetchFact.rejected, (state) => {
      state.randomCatFact = '';
      state.status = Status.FAILURE;
    });

    builder.addCase(
      fetchBreeds.fulfilled,
      (state, action: PayloadAction<BreedType[]>) => {
        state.breeds = action.payload;
      }
    );
  },
});

export default factSlice.reducer;
