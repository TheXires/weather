import * as Localization from 'expo-localization';
import { City, Location } from '../types/location';
import { Weather } from '../types/weather';
import { myWeatherApi } from './setup';

export const getWeather = async (location: Location): Promise<Weather | undefined> => {
  console.log('called api weather data');

  try {
    const res = await myWeatherApi.get('/data/2.5/onecall', {
      params: {
        lat: location.lat,
        lon: location.lon,
        lang: Localization.locale.slice(0, 2),
      },
    });

    const weather: Weather = res.data;

    weather.current.time += new Date().getTimezoneOffset() * 60 * 1000;
    weather.hourly.forEach(
      (element) => (element.time += new Date().getTimezoneOffset() * 60 * 1000),
    );
    weather.daily.forEach(
      (element) => (element.time += new Date().getTimezoneOffset() * 60 * 1000),
    );

    return weather;
  } catch (error) {
    console.log('getWeather error: ', error);
    return undefined;
  }
};

export const getCityByLocation = async (location: Location): Promise<City | undefined> => {
  console.log('called api city by location data');

  try {
    const res = await myWeatherApi.get('/geo/1.0/reverse', {
      params: {
        lat: location.lat,
        lon: location.lon,
        limit: 1,
      },
    });
    return res.data;
  } catch (error) {
    console.error('getCityByLocation error: ', error);
    return undefined;
  }
};

export const getCityByName = async (cityName: string): Promise<City[] | undefined> => {
  console.log('called api city by name data');

  try {
    const res = await myWeatherApi.get('/geo/1.0/direct', {
      params: {
        q: cityName,
        limit: 10,
      },
    });

    return res.data;
  } catch (error) {
    console.error('getCityByName error: ', error);
    return undefined;
  }
};
