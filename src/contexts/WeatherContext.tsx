import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import { createContext, useEffect, useState } from 'react';
import { getCityByLocation, getWeather } from '../api/weatherApi';
import { LOCATION, USELOCATION, WEATHER } from '../constants';
import { WeatherContextType } from '../types/context';
import { Location } from '../types/location';
import { CurrentWeather, DailyWeather, HourlyWeather, Weather } from '../types/weather';
import { getFromLocalStorage } from '../util/localStorage';
import { getLocation } from '../util/location';

export const WeatherContext = createContext({} as WeatherContextType);

export const WeatherProvider = (props: any) => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | undefined>();
  const [hourlyForecast, setHourlyForecast] = useState<HourlyWeather[] | undefined>();
  const [dailyForecast, setDailyForecast] = useState<DailyWeather[] | undefined>();

  const [location, setLocation] = useState<Location>({ lat: 0, lon: 0 });
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  useEffect(() => {
    boot();
  }, []);

  useEffect(() => {
    if (location.lat === 0 && location.lon === 0) return;
    getCity();
    refreshWeatherData();
    AsyncStorage.setItem(LOCATION, JSON.stringify(location));
  }, [location]);

  const boot = async () => {
    try {
      const useLocation: boolean | undefined = await getFromLocalStorage(USELOCATION);
      if (useLocation != null && useLocation === true) {
        const currentLocation = await getLocation();
        if (currentLocation != null) return setLocation(currentLocation);
      }

      const localLocation: Location | null = await getFromLocalStorage(LOCATION);
      if (localLocation != null) return setLocation(localLocation);

      const currentLocation = await getLocation();
      if (currentLocation != null) return setLocation(currentLocation);
    } catch (error) {
      console.error('getCurrentWeatherData error: ', error);
    }
  };

  const setWeather = (weather: Weather) => {
    setCurrentWeather(weather.current);
    setHourlyForecast(weather.hourly);
    setDailyForecast(weather.daily);
  };

  const refreshWeatherData = async () => {
    try {
      const weather = await getWeather(location);
      if (weather == null) return;
      AsyncStorage.setItem(WEATHER, JSON.stringify(weather));
      setWeather(weather);
    } catch (error) {
      console.error('refreshWeatherData error: ', error);
    }
  };

  const getCity = async () => {
    try {
      const city = await getCityByLocation(location);
      if (city == null) return;

      const lang = Localization.locale.slice(0, 2);
      let cityName = city.name;
      if (lang !== 'en' && city.local_names[lang] != null) cityName = city.local_names[lang];
      setCity(cityName);
      setCountry(city.country);
    } catch (error) {
      console.error('getCity error: ', error);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        dailyForecast,
        hourlyForecast,
        refreshWeatherData,
        location,
        city,
        country,
        setLocation,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
