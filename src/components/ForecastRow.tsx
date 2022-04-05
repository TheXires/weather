import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MyTheme } from '../theme/colors';
import { WeatherIconName } from '../types/weather';
import MyText from './MyText';
import WeatherIcon from './WeatherIcon';

interface Props {
  weatherIcon: WeatherIconName;
  i: number;
}

const ForecastRow = ({ i, weatherIcon }: Props) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View>
          <MyText>{i}</MyText>
        </View>
        <View style={styles.weatherContainer}>
          <View>
            <WeatherIcon weatherIcon={weatherIcon} maxHeight={30} />
          </View>
          <MyText style={styles.weatherDescription}>Sunny</MyText>
        </View>
        <View style={styles.degreeContainer}>
          <MyText>24</MyText>
          <MyText style={{ color: MyTheme.colors.border, marginLeft: 10 }}>18</MyText>
        </View>
      </View>
    </View>
  );
};

export default ForecastRow;

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  weatherDescription: {
    marginLeft: 10,
  },
  degreeContainer: {
    flexDirection: 'row',
  },
});
