import { Location } from './location';
import { CurrentWeather, DailyWeather, HourlyWeather } from './weather';

export interface WeatherContextType {
  currentWeather: CurrentWeather | undefined;
  dailyForecast: DailyWeather[] | undefined;
  hourlyForecast: HourlyWeather[] | undefined;
  refreshWeatherData: () => void;

  location: Location;
  city: string;
  country: string;
  setLocation: (location: Location) => void;
}
