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

// https://openweathermap.org/api/one-call-api
export interface CurrentWeatherOpenWeather {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
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
  wind_gust: number;
  wind_speed: number;
}

export interface CurrentWeatherMetNorway {
  air_pressure_at_sea_level: number;
  air_temperature: number;
  cloud_area_fraction: number;
  cloud_area_fraction_high: number;
  cloud_area_fraction_low: number;
  cloud_area_fraction_medium: number;
  dew_point_temperature: number;
  fog_area_fraction: number;
  relative_humidity: number;
  ultraviolet_index_clear_sky: number;
  wind_from_direction: number;
  wind_speed: number;
}
