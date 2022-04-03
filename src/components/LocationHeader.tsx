import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MyText from './MyText';
import { MyTheme } from '../theme/colors';
import { Entypo } from '@expo/vector-icons';
import dateformat from 'dateformat';
import { capitalize } from '../util/stringmanipulation';

interface Props {
  city: string;
  country: string;
  date: number;
}

const LocationHeader = ({ city, country, date }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <MyText style={styles.borderFont}>{dateformat(date, 'dd, mmmm yyyy')}</MyText>
        <View style={styles.locationContainer}>
          <MyText>
            <Entypo name="location-pin" size={20} />
            <Text style={{ fontSize: 20 }}>{String(city).toUpperCase()}, </Text>
          </MyText>
          <MyText style={styles.borderFont}>{capitalize(country)}</MyText>
        </View>
      </View>
      <View>
        <Entypo color={MyTheme.colors.border} name="dots-two-horizontal" size={24} />
        <Entypo
          color={MyTheme.colors.border}
          name="dots-two-horizontal"
          size={24}
          style={{ marginTop: -15 }}
        />
      </View>
    </View>
  );
};

export default LocationHeader;

const styles = StyleSheet.create({
  borderFont: {
    color: MyTheme.colors.border,
  },
  container: {
    paddingHorizontal: 15,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 50,
  },
});
