import dateFormat from 'dateformat';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MyTheme } from '../theme/colors';
import { WeatherIconName } from '../types/weather';
import MyText from './MyText';
import WeatherIcon from './WeatherIcon';

interface Props {
  weatherIcon: WeatherIconName;
  time: number;
  temperature: number;
}

const ForecastElement = ({ weatherIcon, time, temperature }: Props) => {
  return (
    <View style={styles.container}>
      <WeatherIcon weatherIcon={weatherIcon} maxHeight={70} />
      <MyText style={styles.time}>{dateFormat(time, 'HH:MM')}</MyText>
      <MyText style={styles.temperature}>{temperature}°</MyText>
    </View>
  );
};

export default ForecastElement;

const styles = StyleSheet.create({
  container: {
    width: 60,
    marginHorizontal: 28,
    alignItems: 'center',
    height: 120,
  },
  time: {
    color: MyTheme.colors.border,
    fontSize: 12,
    marginVertical: 5,
  },
  temperature: {
    fontSize: 22,
  },
});
