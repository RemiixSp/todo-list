export interface weatherLocationParams {
  lat: number;
  lon: number;
}

export interface main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface wind {
  speed: number;
  deg: number;
}

export interface fetchWeatherType {
  main: main;
  wind: wind;
}

export const initialState: fetchWeatherType = {
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
  },
  wind: { speed: 0, deg: 0 },
};
