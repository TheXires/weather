import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MyTheme } from '../theme/colors';
import { CurrentWeather } from '../types/weather';
import MyText from './MyText';
import WeatherIcon from './WeatherIcon';

interface Props {
  weather: CurrentWeather;
  temperature_day: number;
  temperature_night: number;
}

const OverViewHeader = ({ weather, temperature_day, temperature_night }: Props) => {
  return (
    <BlurView style={styles.container} intensity={20}>
      <WeatherIcon weatherIcon={weather.icon} maxHeight={110} inRow />
      <View style={styles.dataContainer}>
        <View style={styles.degreeContainer}>
          <MyText style={styles.degreeDay}>
            {temperature_day}
            <MyText style={[styles.degreeDay, { color: MyTheme.colors.primary }]}>°</MyText>
          </MyText>
          <MyText style={styles.degreeNight}>{temperature_night}</MyText>
        </View>
        <MyText fontWeight="bold" style={styles.description}>
          {weather.description}
        </MyText>
      </View>
    </BlurView>
  );
};

export default OverViewHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    width: '90%',
    height: 150,
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
  },
  dataContainer: {
    alignItems: 'center',
  },
  degreeContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 5,
  },
  degreeDay: {
    fontSize: 66,
  },
  degreeNight: {
    fontSize: 42,
    color: MyTheme.colors.border,
    marginLeft: 5,
  },
  description: {
    fontSize: 16,
    marginTop: -15,
  },
});
