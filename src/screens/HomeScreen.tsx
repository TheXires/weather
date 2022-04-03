import React from 'react';
import { StyleSheet, View } from 'react-native';
import DetailsRow from '../components/DetailsRow';
import HourForecast from '../components/Hourforecast';
import LocationHeader from '../components/LocationHeader';
import MainData from '../components/MainData';
import Spacer from '../components/Spacer';
import { MyTheme } from '../theme/colors';

const HomeScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: MyTheme.colors.background }]}>
      <LocationHeader date={Date.now()} city="essen" country="germany" />
      <MainData />
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
