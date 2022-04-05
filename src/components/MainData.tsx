import { StyleSheet, Image, ImageBackground, View } from 'react-native';
import React from 'react';
import backgroundImage from '../../assets/worldBackground.png';
import MyText from './MyText';
import { MyTheme } from '../theme/colors';
import WeatherIcon from './WeatherIcon';
import { WeatherIconName } from '../types/weather';

interface Props {
  weatherIcon: WeatherIconName;
  temperature: number;
}

const MainData = ({ weatherIcon, temperature }: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}
        blurRadius={5}
      >
        <View style={styles.backgroundImageAdjustment}>
          <WeatherIcon weatherIcon={weatherIcon} maxHeight={190} />
        </View>
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <MyText>Thunder</MyText>
        <MyText style={styles.temperature}>
          {temperature}
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
