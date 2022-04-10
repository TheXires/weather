import {
  CurrentWeather,
  CurrentWeatherOpenWeather,
  DailyWeather,
  DailyWeatherOpenWeather,
  HourlyWeather,
  HourlyWeatherOpenWeather,
  Weather,
  WeatherIconName,
  WeatherOpenWeather,
} from '../types/weather';

/**
 * maps  weather from open weather format to internal format
 *
 * @param openWeather current weather object from open weather
 * @returns mapped object
 */
export const openWeatherToGeneric = (openWeather: WeatherOpenWeather): Weather => {
  const currentWeather: CurrentWeather = {
    clouds: openWeather.current.clouds,
    description: openWeather.current.weather[0].main.toLowerCase(),
    humidity: openWeather.current.humidity,
    icon: mapIconFromOpenWeather(
      openWeather.current.weather[0].id,
      openWeather.current.weather[0].icon,
    ),
    pressure: openWeather.current.pressure,
    sunrise: openWeather.current.sunrise,
    sunset: openWeather.current.sunset,
    temperature: Math.round(openWeather.current.temp),
    time: openWeather.current.dt * 1000,
    uvi: openWeather.current.uvi,
    visibility: openWeather.current.visibility,
    wind_deg: openWeather.current.wind_deg,
    wind_gust: openWeather.current.wind_gust ?? 0,
    wind_speed: openWeather.current.wind_speed,
  };

  const hourlyWeather: HourlyWeather[] = [];

  openWeather.hourly.forEach((element: HourlyWeatherOpenWeather, index: number) => {
    if (index === 0 || index > 24) return;

    hourlyWeather.push({
      clouds: element.clouds,
      description: element.weather[0].main.toLowerCase(),
      humidity: element.humidity,
      icon: mapIconFromOpenWeather(element.weather[0].id, element.weather[0].icon),
      pressure: element.pressure,
      temperature: Math.round(element.temp),
      time: element.dt * 1000,
      uvi: element.uvi,
      visibility: element.visibility,
      wind_deg: element.wind_deg,
      wind_gust: element.wind_gust ?? 0,
      wind_speed: element.wind_speed,
    });
  });

  const dailyWeather: DailyWeather[] = [];

  openWeather.daily.forEach((element: DailyWeatherOpenWeather) => {
    dailyWeather.push({
      clouds: element.clouds,
      dew_point: element.dew_point,
      humidity: element.humidity,
      icon: mapIconFromOpenWeather(element.weather[0].id, element.weather[0].icon),
      moon_phase: element.moon_phase,
      moonrise: element.moonrise,
      moonset: element.moonset,
      pressure: element.pressure,
      pop: element.pop,
      sunrise: element.sunrise,
      sunset: element.sunset,
      temperature_day: Math.round(element.temp.day),
      temperature_night: Math.round(element.temp.night),
      time: element.dt * 1000,
      uvi: element.uvi,
      wind_deg: element.wind_deg,
      wind_gust: element.wind_gust ?? 0,
      wind_speed: element.wind_speed,
    });
  });

  return {
    lat: openWeather.lat,
    lon: openWeather.lon,
    timezone: openWeather.timezone,
    timezone_offset: openWeather.timezone_offset * 1000,
    current: currentWeather,
    hourly: hourlyWeather,
    daily: dailyWeather,
  };
};

/**
 * get the name of a local icon based on the id and icon name from open weather
 *
 * @param id weather id from open weather
 * @param icon weather icon name from open weather
 * @returns local icon name
 */
const mapIconFromOpenWeather = (id: number, icon: string): WeatherIconName => {
  let result: WeatherIconName = 'cloudy';

  switch (id) {
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      result = 'thunderstorm';
      break;
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
    case 511:
    case 520:
    case 521:
    case 522:
    case 531:
      result = 'rain';
      break;
    case 600:
    case 601:
    case 602:
    case 611:
    case 612:
    case 613:
      result = 'snow';
      break;
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      result = 'snowrain';
      break;
    case 701:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
    case 761:
    case 762:
    case 771:
    case 781:
      result = 'atmosphere';
      break;
    case 800:
      result = icon.charAt(icon.length - 1) === 'd' ? 'clearsky_day' : 'clearsky_night';
      break;
    case 801:
    case 802:
      result = icon.charAt(icon.length - 1) === 'd' ? 'fair_day' : 'fair_night';
      break;
    case 803:
    case 804:
      result = 'cloudy';
      break;
    default:
      break;
  }

  return result;
};
