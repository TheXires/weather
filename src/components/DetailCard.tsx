import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CurrentWeather } from '../types/weather';
import DetailElement from './DetailElement';

interface Props {
  weather: CurrentWeather;
}

const DetailCard = ({ weather }: Props) => {
  return (
    <BlurView style={styles.container} intensity={20}>
      <View style={styles.row}>
        <DetailElement icon="wind" value={`${weather.wind_speed} m/s`} />
        <DetailElement icon="droplet" value={`${weather.humidity}%`} />
        <DetailElement icon="cloud" value={`${weather.clouds}%`} />
      </View>
      <View style={styles.row}>
        <DetailElement icon="sun" value={`${weather.uvi} UV`} />
        <DetailElement icon="loader" value={`${weather.pressure} hPa`} />
        <DetailElement icon="eye" value={`${weather.visibility / 1000} km`} />
      </View>
    </BlurView>
  );
};

export default DetailCard;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  row: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
