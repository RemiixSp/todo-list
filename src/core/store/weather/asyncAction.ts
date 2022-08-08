import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchWeatherType, weatherLocationParams } from './types';
import { kelvinToCelsium } from './utils';

export const fetchWeather = createAsyncThunk<
  fetchWeatherType,
  weatherLocationParams
>('weather/fetchWeather', async (params) => {
  const { lat, lon } = params;

  const { data } = await axios.get<fetchWeatherType>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a82b9cf0093d3518f69744e22d3a4e54`
  );
  data.main.feels_like = kelvinToCelsium(data.main.feels_like);
  data.main.temp = kelvinToCelsium(data.main.temp);
  data.main.temp_max = kelvinToCelsium(data.main.temp_max);
  data.main.temp_min = kelvinToCelsium(data.main.temp_min);
  return data;
});
