import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ForecastElement from './ForecastElement';

const HourForecast = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={110}
      style={styles.container}
    >
      <ForecastElement time={Date.now()} temperature={2} icon="" />
      <ForecastElement time={Date.now()} temperature={3} icon="" />
      <ForecastElement time={Date.now()} temperature={2} icon="" />
      <ForecastElement time={Date.now()} temperature={2} icon="" />
      <ForecastElement time={Date.now()} temperature={3} icon="" />
      <ForecastElement time={Date.now()} temperature={2} icon="" />
      <ForecastElement time={Date.now()} temperature={2} icon="" />
      <ForecastElement time={Date.now()} temperature={3} icon="" />
      <ForecastElement time={Date.now()} temperature={2} icon="" />
      <ForecastElement time={Date.now()} temperature={2} icon="" />
      <ForecastElement time={Date.now()} temperature={3} icon="" />
      <ForecastElement time={Date.now()} temperature={2} icon="" />
    </ScrollView>
  );
};

export default HourForecast;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
