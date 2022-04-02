import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MyTheme } from '../theme/colors';
import RootStackNavigator from './MainNavigator';

export const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};
