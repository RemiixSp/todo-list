export interface weatherLocationParams {
  lat: number;
  lon: number;
}

export interface MainType {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface WindType {
  speed: number;
  deg: number;
}

export interface FetchWeatherType {
  main: MainType;
  wind: WindType;
}

export const initialState: FetchWeatherType = {
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
