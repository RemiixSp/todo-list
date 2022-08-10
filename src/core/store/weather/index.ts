import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { fetchWeather } from './asyncAction';
import { FetchWeatherType, weatherInitialState } from './types';
import { Status } from '../types';

export const initialState: weatherInitialState = {
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
  },
  wind: { speed: 0, deg: 0 },
  status: Status.LOADING,
  name: '',
  errorMsg: '',
};

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
        state.name = action.payload.name;
        state.status = Status.SUCCESS;
      }
    );
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchWeather.rejected, (state) => {
      state.status = Status.FAILURE;
      state.errorMsg = 'Error when trying get weather info';
    });
  },
});

export default weatherSlice.reducer;
