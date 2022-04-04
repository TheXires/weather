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
