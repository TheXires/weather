import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { HourlyWeather } from '../types/weather';
import ForecastElement from './ForecastElement';

interface Props {
  forecast: HourlyWeather[];
}

const HourForecast = ({ forecast }: Props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={116}
      style={styles.container}
    >
      {forecast.map((hour: HourlyWeather) => {
        return (
          <ForecastElement
            time={hour.time}
            temperature={hour.temperature}
            weatherIcon={hour.icon}
          />
        );
      })}
    </ScrollView>
  );
};

export default HourForecast;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
