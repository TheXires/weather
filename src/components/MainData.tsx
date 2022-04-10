import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import backgroundImage from '../../assets/worldBackground.png';
import { MyTheme } from '../theme/colors';
import { CurrentWeather } from '../types/weather';
import MyText from './MyText';
import WeatherIcon from './WeatherIcon';

interface Props {
  weather: CurrentWeather;
}

const MainData = ({ weather }: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}
        blurRadius={5}
      >
        <View style={styles.backgroundImageAdjustment}>
          <WeatherIcon weatherIcon={weather.icon} maxHeight={190} />
        </View>
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <MyText>{weather.description}</MyText>
        <MyText style={styles.temperature}>
          {weather.temperature}
          <MyText style={styles.degree}>°</MyText>
        </MyText>
      </View>
    </View>
  );
};

export default MainData;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    minWidth: '100%',
    minHeight: 250,
    aspectRatio: 960 / 491,
    paddingTop: 10,
    alignItems: 'center',
    marginLeft: 25,
  },
  backgroundImageAdjustment: {
    marginLeft: -25,
  },
  bottomContainer: {
    alignItems: 'center',
    marginTop: -20,
  },
  temperature: {
    fontSize: 76,
  },
  degree: {
    fontSize: 76,
    color: MyTheme.colors.primary,
  },
});
