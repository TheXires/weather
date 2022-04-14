import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { WeatherProvider } from '../contexts/WeatherContext';
import ForecastScreen from '../screens/ForecastScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import { RootStackParamList } from '../types/navigation';

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <WeatherProvider>
      <RootStack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Main" component={HomeScreen} />
        <RootStack.Screen name="Search" component={SearchScreen} />
        <RootStack.Screen name="Forecast" component={ForecastScreen} />
      </RootStack.Navigator>
    </WeatherProvider>
  );
};

export default RootStackNavigator;
