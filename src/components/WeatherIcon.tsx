import React from 'react';
import { Image, ImageStyle, StyleProp, StyleSheet } from 'react-native';
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

const iconImports = {
  atmosphere,
  clearsky_day,
  clearsky_night,
  cloudy,
  fair_day,
  fair_night,
  rain,
  snow,
  snowrain,
  thunderstorm,
};

interface Props {
  weatherIcon: WeatherIconName;
  maxHeight: number;
  style?: StyleProp<ImageStyle>;
  inRow?: boolean;
}

const WeatherIcon = ({ weatherIcon, maxHeight, style, inRow = false }: Props) => {
  return (
    <Image
      source={iconImports[`${weatherIcon}`]}
      style={[inRow ? { maxWidth: maxHeight } : { maxHeight }, style]}
      resizeMode="contain"
    />
  );
};

export default WeatherIcon;

const styles = StyleSheet.create({});
