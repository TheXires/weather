import { Weather, CurrentWeatherOpenWeather, WeatherIconName } from '../types/weather';

/**
 * maps current weather from open weather format to internal format
 *
 * @param openWeather current weather object from open weather
 * @returns mapped object
 */
export const openWeatherToGeneric = (openWeather: CurrentWeatherOpenWeather): Weather => {
  return {
    clouds: openWeather.clouds,
    description: openWeather.weather[0].description,
    humidity: openWeather.humidity,
    icon: mapIconFromOpenWeather(openWeather.weather[0].id, openWeather.weather[0].icon),
    pressure: openWeather.pressure,
    sunrise: openWeather.sunrise,
    sunset: openWeather.sunset,
    temperature: Math.round(openWeather.temp),
    time: openWeather.dt * 1000,
    uvi: openWeather.uvi,
    visibility: openWeather.visibility,
    wind_deg: openWeather.wind_deg,
    wind_gust: openWeather.wind_gust,
    wind_speed: openWeather.wind_speed,
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
