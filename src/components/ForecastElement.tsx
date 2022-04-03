import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import WeatherIcon from './WeatherIcon';
import MyText from './MyText';
import dateFormat from 'dateformat';
import { MyTheme } from '../theme/colors';

interface Props {
  icon: string;
  time: number;
  temperature: number;
}

const ForecastElement = ({ icon, time, temperature }: Props) => {
  return (
    <View style={styles.container}>
      <WeatherIcon icon={icon} maxHeight={70} />
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