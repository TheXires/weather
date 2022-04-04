import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MyTheme } from '../theme/colors';
import MyText from './MyText';
import WeatherIcon from './WeatherIcon';

interface Props {
  i: number;
}

const ForecastRow = ({ i }: Props) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View>
          <MyText>{i}</MyText>
        </View>
        <View style={styles.weatherContainer}>
          <View>
            <WeatherIcon icon="" maxHeight={30} />
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
