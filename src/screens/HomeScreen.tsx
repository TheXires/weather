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
  const { currentWeather } = useContext<WeatherContextType>(WeatherContext);

  if (currentWeather == null) return null;

  return (
    <View style={[styles.container, { backgroundColor: MyTheme.colors.background }]}>
      <LocationHeader date={currentWeather.time} city="essen" country="germany" />
      <MainData temperature={currentWeather.temperature} weatherIcon={currentWeather.icon} />
      <Spacer height={30} />
      <HourForecast />
      <Spacer height={30} />
      <DetailsRow />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
