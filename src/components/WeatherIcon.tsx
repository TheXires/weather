import React from 'react';
import { Image, ImageStyle, StyleProp, StyleSheet } from 'react-native';
import { WeatherIconName } from '../types/weather';
import { getWeatherIcon } from '../util/icons';

interface Props {
  weatherIcon: WeatherIconName;
  maxHeight: number;
  style?: StyleProp<ImageStyle>;
  inRow?: boolean;
}

const WeatherIcon = ({ weatherIcon, maxHeight, style, inRow = false }: Props) => {
  return (
    <Image
      source={getWeatherIcon(weatherIcon)}
      style={[inRow ? { maxWidth: maxHeight } : { maxHeight }, style]}
      resizeMode="contain"
    />
  );
};

export default WeatherIcon;

const styles = StyleSheet.create({});
