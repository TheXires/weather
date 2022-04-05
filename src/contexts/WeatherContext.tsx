import AsyncStorage from '@react-native-async-storage/async-storage';
import react, { createContext, useEffect, useState } from 'react';
import { getWeather } from '../api/openWeather';
import { WeatherContextType } from '../types/context';
import { Weather } from '../types/weather';
import { CURRENT } from '../constants';

export const WeatherContext = createContext({} as WeatherContextType);

export const WeatherProvider = (props: any) => {
  const [currentWeather, setCurrentWeather] = useState<Weather | undefined>();
  const [hourlyForecast, setHourlyForecast] = useState();
  const [dailyForecast, setDailyForecast] = useState();

  useEffect(() => {
    getCurrentWeatherData();
  }, []);

  const getCurrentWeatherData = async () => {
    try {
      // TODO das einbauen und dann aktualisieren, wenn älter als eine Stunde und manuelles neuladen hinzufügen
      // const localWeatherString = await AsyncStorage.getItem(CURRENT);
      // const localWeather = localWeatherString != null ? JSON.parse(localWeatherString) : null;
      // if (localWeather != null) return setCurrentWeather(localWeather);

      refreshWeatherData();
    } catch (error) {
      console.error('getCurrentWeatherData error: ', error);
    }
  };

  const refreshWeatherData = async () => {
    try {
      const res = await getWeather(51.4699, 7.0838);
      AsyncStorage.setItem(CURRENT, JSON.stringify(res));
      setCurrentWeather(res);
    } catch (error) {
      console.error('refreshWeatherData error: ', error);
    }
  };

  return (
    <WeatherContext.Provider value={{ currentWeather, refreshWeatherData }}>
      {props.children}
    </WeatherContext.Provider>
  );
};
