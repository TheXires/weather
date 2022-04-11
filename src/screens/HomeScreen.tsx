import I18n from 'i18n-js';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import DetailsRow from '../components/DetailsRow';
import HourForecast from '../components/Hourforecast';
import LocationHeader from '../components/LocationHeader';
import MainData from '../components/MainData';
import MyText from '../components/MyText';
import Spacer from '../components/Spacer';
import { WeatherContext } from '../contexts/WeatherContext';
import { MyTheme } from '../theme/colors';
import { WeatherContextType } from '../types/context';

const HomeScreen = () => {
  const { currentWeather, hourlyForecast, city, country } =
    useContext<WeatherContextType>(WeatherContext);

  return (
    <View style={[styles.container, { backgroundColor: MyTheme.colors.background }]}>
      <LocationHeader
        date={currentWeather?.time ?? 0}
        city={city !== '' ? city : I18n.t('unknown')}
        country={country !== '' ? country : I18n.t('unknown')}
        forecastDisabled={currentWeather == null}
      />
      {currentWeather != null && hourlyForecast != null ? (
        <>
          <Spacer height={50} />
          <MainData weather={currentWeather} />
          <Spacer height={30} />
          <HourForecast forecast={hourlyForecast} />
          <Spacer height={30} />
          <DetailsRow weather={currentWeather} />
        </>
      ) : (
        <View style={styles.noDataContainer}>
          <View style={styles.innerContainer}>
            <MyText style={styles.noDataMessage}>{I18n.t('noDataForThisLocation')}</MyText>
          </View>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noDataContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataMessage: {
    color: MyTheme.colors.border,
    textAlign: 'center',
  },
});
