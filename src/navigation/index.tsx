import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { getWeatherOpenWeather } from '../api/openWeather';
import { MyTheme } from '../theme/colors';
import RootStackNavigator from './MainNavigator';

export const Navigation = () => {
  // useEffect(() => {
  //   getWeather(51.4699, 7.0838);
  // }, []);

  return (
    <NavigationContainer theme={MyTheme}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};
