import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ForecastScreen from '../screens/ForecastScreen';
import { RootStackParamList } from '../types/navigation';
import { WeatherProvider } from '../contexts/WeatherContext';

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
