import dateFormat from 'dateformat';
import I18n from 'i18n-js';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MyTheme } from '../theme/colors';
import { DailyWeather } from '../types/weather';
import MyText from './MyText';
import WeatherIcon from './WeatherIcon';

interface Props {
  weather: DailyWeather;
}

const ForecastRow = ({ weather }: Props) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.dayContainer}>
          <MyText>{I18n.t(dateFormat(weather.time, 'ddd'))}</MyText>
        </View>
        <View style={styles.weatherContainer}>
          <View>
            <WeatherIcon weatherIcon={weather.icon} maxHeight={40} inRow />
          </View>
          <MyText style={styles.weatherDescription}>{weather.description}</MyText>
        </View>
        <View style={styles.degreeContainer}>
          <MyText style={styles.degreeDay}>{weather.temperature_day}</MyText>
          <MyText style={styles.degreeNight}>{weather.temperature_night}</MyText>
        </View>
      </View>
    </View>
  );
};

export default ForecastRow;

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
  },
  weatherDescription: {
    marginLeft: 10,
  },
  degreeContainer: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  degreeDay: {
    width: 25,
    textAlign: 'right',
  },
  degreeNight: {
    width: 25,
    textAlign: 'right',
    color: MyTheme.colors.border,
    marginLeft: 5,
  },
  dayContainer: {
    width: '15%',
  },
});
