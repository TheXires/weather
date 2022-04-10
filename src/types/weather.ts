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

// https://openweathermap.org/api/one-call-api
export interface WeatherOpenWeather {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentWeatherOpenWeather;
  hourly: HourlyWeatherOpenWeather[];
  daily: DailyWeatherOpenWeather[];
  alert?: any;
}

// https://openweathermap.org/api/one-call-api
export interface CurrentWeatherOpenWeather {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  rain?: any;
  snow?: any;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind_deg: number;
  wind_gust?: number;
  wind_speed: number;
}

// https://openweathermap.org/api/one-call-api
export interface HourlyWeatherOpenWeather {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pop: number;
  pressure: number;
  rain?: any;
  snow?: any;
  temp: number;
  uvi: number;
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind_deg: number;
  wind_gust?: number;
  wind_speed: number;
}

// https://openweathermap.org/api/one-call-api
export interface DailyWeatherOpenWeather {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pressure: number;
  pop: number;
  rain?: number;
  snow?: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  uvi: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind_deg: number;
  wind_gust?: number;
  wind_speed: number;
}
