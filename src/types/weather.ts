export type WeatherIconName =
  | 'atmosphere'
  | 'clearsky_day'
  | 'clearsky_night'
  | 'cloudy'
  | 'fair_day'
  | 'fair_night'
  | 'rain'
  | 'snow'
  | 'snowrain'
  | 'thunderstorm';

export interface Weather {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentWeather;
  hourly: HourlyWeather[];
  daily: DailyWeather[];
}

export interface CurrentWeather {
  clouds: number;
  description: string;
  humidity: number;
  icon: WeatherIconName;
  pressure: number;
  sunrise: number;
  sunset: number;
  temperature: number;
  time: number;
  uvi: number;
  visibility: number;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface HourlyWeather {
  clouds: number;
  description: string;
  humidity: number;
  icon: WeatherIconName;
  pressure: number;
  temperature: number;
  time: number;
  uvi: number;
  visibility: number;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface DailyWeather {
  clouds: number;
  description: string;
  humidity: number;
  icon: WeatherIconName;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pressure: number;
  pop: number;
  sunrise: number;
  sunset: number;
  temperature_day: number;
  temperature_night: number;
  time: number;
  uvi: number;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}
