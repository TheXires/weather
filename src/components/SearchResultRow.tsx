import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MyTheme } from '../theme/colors';
import { City, Location } from '../types/location';
import MyText from './MyText';

interface Props {
  city: City;
  onPress: (location: Location) => void;
}

const SearchResultRow = ({ city, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress({ lat: city.lat, lon: city.lon })}
    >
      <MyText>{city.name}</MyText>
      <MyText style={{ color: MyTheme.colors.border }}>, {city.country}</MyText>
    </TouchableOpacity>
  );
};

export default SearchResultRow;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
});
