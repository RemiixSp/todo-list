import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../types';
import { fetchWeather } from './asyncAction';
import { fetchWeatherType, initialState } from './types';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {});

    builder.addCase(
      fetchWeather.fulfilled,
      (state, action: PayloadAction<fetchWeatherType>) => {
        state.main = action.payload.main;
        state.wind = action.payload.wind;
      }
    );

    builder.addCase(fetchWeather.rejected, (state) => {});
  },
});

export default weatherSlice.reducer;
