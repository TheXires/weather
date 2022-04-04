import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MyTheme } from '../theme/colors';
import MyText from './MyText';
import WeatherIcon from './WeatherIcon';

const OverViewHeader = () => {
  return (
    <BlurView style={styles.container} intensity={20}>
      <WeatherIcon icon="" maxHeight={110} inRow />
      <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
        <View>
          <MyText style={{ fontSize: 56 }}>
            21<MyText style={{ fontSize: 56, color: MyTheme.colors.primary }}>°</MyText>
          </MyText>
          <MyText fontWeight="bold" style={{ fontSize: 16, marginTop: -15 }}>
            Thunder
          </MyText>
        </View>
        <MyText style={{ fontSize: 32, color: MyTheme.colors.border, marginLeft: 5 }}>16</MyText>
      </View>
    </BlurView>
  );
};

export default OverViewHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '90%',
    height: 150,
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
  },
});
