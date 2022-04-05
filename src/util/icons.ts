import atmosphere from '../../assets/3dWeatherIcons/atmosphere.png';
import clearsky_day from '../../assets/3dWeatherIcons/clearsky_day.png';
import clearsky_night from '../../assets/3dWeatherIcons/clearsky_night.png';
import cloudy from '../../assets/3dWeatherIcons/cloudy.png';
import fair_day from '../../assets/3dWeatherIcons/fair_day.png';
import fair_night from '../../assets/3dWeatherIcons/fair_night.png';
import rain from '../../assets/3dWeatherIcons/rain.png';
import snow from '../../assets/3dWeatherIcons/snow.png';
import snowrain from '../../assets/3dWeatherIcons/snowrain.png';
import thunderstorm from '../../assets/3dWeatherIcons/thunderstorm.png';
import { WeatherIconName } from '../types/weather';

/**
 * get the weather icon based on the icon name
 *
 * @param iconName name of the icon
 * @returns icon
 */
export const getWeatherIcon = (iconName: WeatherIconName) => {
  switch (iconName) {
    case 'atmosphere':
      return atmosphere;
    case 'clearsky_day':
      return clearsky_day;
    case 'clearsky_night':
      return clearsky_night;
    case 'cloudy':
      return cloudy;
    case 'fair_day':
      return fair_day;
    case 'fair_night':
      return fair_night;
    case 'rain':
      return rain;
    case 'snow':
      return snow;
    case 'snowrain':
      return snowrain;
    case 'thunderstorm':
      return thunderstorm;
    default:
      return cloudy;
  }
};
