import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';
import { getWeather } from '../api/openWeather';
import { CURRENT, DAILY, HOURLY } from '../constants';
import { WeatherContextType } from '../types/context';
import { CurrentWeather, DailyWeather, HourlyWeather, Weather } from '../types/weather';

export const WeatherContext = createContext({} as WeatherContextType);

export const WeatherProvider = (props: any) => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | undefined>();
  const [hourlyForecast, setHourlyForecast] = useState<HourlyWeather[] | undefined>();
  const [dailyForecast, setDailyForecast] = useState<DailyWeather[] | undefined>();

  useEffect(() => {
    getCurrentWeatherData();
  }, []);

  const getCurrentWeatherData = async () => {
    const now = Date.now();
    const hourInMs = 60 * 60 * 1000;
    try {
      const localWeatherString = await AsyncStorage.getItem(CURRENT);
      const localWeather: Weather | undefined | null =
        localWeatherString != null ? JSON.parse(localWeatherString) : null;

      if (localWeather == null || now - localWeather.current.time > hourInMs)
        return refreshWeatherData();

      console.log('used local Weather');
      setCurrentWeather(localWeather.current);
      setHourlyForecast(localWeather.hourly);
      setDailyForecast(localWeather.daily);
      return;
    } catch (error) {
      console.error('getCurrentWeatherData error: ', error);
    }
  };

  const refreshWeatherData = async () => {
    try {
      const res = await getWeather(51.4699, 7.0838);
      if (res != null) AsyncStorage.setItem(CURRENT, JSON.stringify(res));
      setCurrentWeather(res?.current);
      setHourlyForecast(res?.hourly);
      setDailyForecast(res?.daily);
    } catch (error) {
      console.error('refreshWeatherData error: ', error);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ currentWeather, dailyForecast, hourlyForecast, refreshWeatherData }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
