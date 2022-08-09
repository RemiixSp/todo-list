import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../core/store/store';
import { fetchWeather } from '../../../core/store/weather/asyncAction';
import { MainType, WindType } from '../../../core/store/weather/types';
import { useUpdateTimeIntervals } from '../../hooks/useUpdateTimeIntervals';
import styles from './weather.module.scss';

const Weather = () => {
  const weather = useSelector((state: RootState) => state.weather);

  const dispatch = useAppDispatch();

  const getForecast = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const getWeather = async () => {
        try {
          dispatch(
            fetchWeather({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            })
          );
        } catch (error) {
          alert('Error while getting facts');
        }
      };
      getWeather();
    });
  };

  useEffect(() => {
    getForecast();
  }, []);

  useUpdateTimeIntervals(
    43200000,
    () => {
      getForecast();
    },
    [weather]
  );

  const mainKeys = Object.keys(weather.main);
  const windKeys = Object.keys(weather.wind);

  return (
    <div className={styles.weatherWidget}>
      <h3 className={styles.weatherHeader}>Weather in your location</h3>
      <div className={styles.weatherInfo}>
        <div className={styles.mainInfo}>
          <h4>Main info</h4>
          <ul className={styles.listOfWeather}>
            {mainKeys.map((key) => (
              <li key={key} className={styles.eachWeatherProp}>{`${key}: ${
                weather.main[key as keyof MainType]
              }`}</li>
            ))}
          </ul>
        </div>
        <div className={styles.windInfo}>
          <h4>Wind information</h4>
          <ul>
            {windKeys.map((key) => (
              <li key={key}>{`${key}: ${
                weather.wind[key as keyof WindType]
              }`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Weather;
