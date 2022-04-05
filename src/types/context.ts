import { Weather } from './weather';

export interface WeatherContextType {
  currentWeather: Weather | undefined;
  refreshWeatherData: () => void;
}
