import { StyleSheet, Image, ImageStyle, StyleProp } from 'react-native';
import React from 'react';
import weatherIcon from '../../assets/3dWeatherIcons/sun/30.png';

interface Props {
  icon: string;
  maxHeight: number;
  style?: StyleProp<ImageStyle>;
}

const WeatherIcon = ({ icon, maxHeight, style }: Props) => {
  return <Image source={weatherIcon} style={[{ aspectRatio: 27 / 29, maxHeight }, style]} />;
};

export default WeatherIcon;

const styles = StyleSheet.create({});
