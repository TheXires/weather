import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ForecastElement from './ForecastElement';

const HourForecast = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={116}
      style={styles.container}
    >
      <ForecastElement time={Date.now()} temperature={2} weatherIcon="atmosphere" />
      <ForecastElement time={Date.now()} temperature={3} weatherIcon="clearsky_day" />
      <ForecastElement time={Date.now()} temperature={2} weatherIcon="clearsky_night" />
      <ForecastElement time={Date.now()} temperature={2} weatherIcon="cloudy" />
      <ForecastElement time={Date.now()} temperature={3} weatherIcon="fair_day" />
      <ForecastElement time={Date.now()} temperature={2} weatherIcon="fair_night" />
      <ForecastElement time={Date.now()} temperature={2} weatherIcon="rain" />
      <ForecastElement time={Date.now()} temperature={3} weatherIcon="snow" />
      <ForecastElement time={Date.now()} temperature={2} weatherIcon="snowrain" />
      <ForecastElement time={Date.now()} temperature={2} weatherIcon="thunderstorm" />
      <ForecastElement time={Date.now()} temperature={3} weatherIcon="atmosphere" />
      <ForecastElement time={Date.now()} temperature={2} weatherIcon="clearsky_day" />
    </ScrollView>
  );
};

export default HourForecast;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
