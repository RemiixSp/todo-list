import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { fetchWeather } from './asyncAction';
import { FetchWeatherType, initialState } from './types';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      fetchWeather.fulfilled,
      (state, action: PayloadAction<FetchWeatherType>) => {
        state.main = action.payload.main;
        state.wind = action.payload.wind;
      }
    );
  },
});

export default weatherSlice.reducer;
