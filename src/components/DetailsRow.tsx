import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CurrentWeather } from '../types/weather';
import DetailElement from './DetailElement';

interface Props {
  weather: CurrentWeather;
}

const DetailsRow = ({ weather }: Props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={91}
      style={styles.container}
    >
      <DetailElement icon="wind" value={`${weather.wind_speed} m/s`} />
      <DetailElement icon="droplet" value={`${weather.humidity}%`} />
      <DetailElement icon="cloud" value={`${weather.clouds}%`} />
      <DetailElement icon="sun" value={`${weather.uvi} UV`} />
      <DetailElement icon="loader" value={`${weather.pressure} hPa`} />
      <DetailElement icon="eye" value={`${weather.visibility / 1000} km`} />
    </ScrollView>
  );
};

export default DetailsRow;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
