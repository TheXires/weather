import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import { RootStackParamList } from '../types/navigation';

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Main">
      <RootStack.Screen name="Main" component={HomeScreen} options={{ headerShown: false }} />
      <RootStack.Screen name="Search" component={SearchScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
