import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import DetailsRow from '../components/DetailsRow';
import HourForecast from '../components/Hourforecast';
import LocationHeader from '../components/LocationHeader';
import MainData from '../components/MainData';
import Spacer from '../components/Spacer';
import { WeatherContext } from '../contexts/WeatherContext';
import { MyTheme } from '../theme/colors';
import { WeatherContextType } from '../types/context';

const HomeScreen = () => {
  const { currentWeather, hourlyForecast } = useContext<WeatherContextType>(WeatherContext);

  if (currentWeather == null || hourlyForecast == null) return null;

  return (
    <View style={[styles.container, { backgroundColor: MyTheme.colors.background }]}>
      <LocationHeader date={currentWeather.time} city="essen" country="germany" />
      <MainData weather={currentWeather} />
      <Spacer height={30} />
      <HourForecast forecast={hourlyForecast} />
      <Spacer height={30} />
      <DetailsRow weather={currentWeather} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
