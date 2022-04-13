import I18n from 'i18n-js';
import React, { useContext } from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import backgroundImage from '../../assets/worldBackground.png';
import DetailCard from '../components/DetailCard';
import ForecastRow from '../components/ForecastRow';
import OverViewHeader from '../components/OverViewHeader';
import TopBar from '../components/TopBar';
import { WeatherContext } from '../contexts/WeatherContext';
import { WeatherContextType } from '../types/context';

const ForecastScreen = () => {
  const { currentWeather, dailyForecast } = useContext<WeatherContextType>(WeatherContext);

  if (currentWeather == null || dailyForecast == null) return null;
  const dummyData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  // return (
  //   <View style={styles.container}>
  //     <Image
  //       source={backgroundImage}
  //       resizeMode="contain"
  //       style={styles.backgroundImage}
  //       blurRadius={Platform.OS === 'ios' ? 0 : 5}
  //     />
  //     <TopBar heading={I18n.t('forecast')} />
  //     <OverViewHeader
  //       weather={currentWeather}
  //       temperature_day={dailyForecast[0].temperature_day}
  //       temperature_night={dailyForecast[0].temperature_night}
  //     />
  //     <DetailCard weather={currentWeather} />
  //     <FlatList
  //       data={dailyForecast}
  //       keyExtractor={(item) => item.time.toString()}
  //       renderItem={({ item }) => <ForecastRow weather={item} />}
  //       showsVerticalScrollIndicator={false}
  //       style={styles.flatListContainer}
  //     />
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage}
        resizeMode="contain"
        style={styles.backgroundImage}
        blurRadius={Platform.OS === 'ios' ? 0 : 5}
      />
      <TopBar heading={I18n.t('forecast')} />
      <ScrollView
        contentContainerStyle={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <OverViewHeader
          weather={currentWeather}
          temperature_day={dailyForecast[0].temperature_day}
          temperature_night={dailyForecast[0].temperature_night}
        />
        <DetailCard weather={currentWeather} />
        {dailyForecast.map((item) => {
          return <ForecastRow weather={item} key={item.time.toString()} />;
        })}
      </ScrollView>
    </View>
  );
};

export default ForecastScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 55,
    left: -260,
    height: 250,
    aspectRatio: 960 / 491,
    alignItems: 'center',
  },
  flatListContainer: {
    width: '100%',
  },
});
