import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MyText from './MyText';
import { MyTheme } from '../theme/colors';
import { Entypo } from '@expo/vector-icons';
import dateformat from 'dateformat';
import { capitalize } from '../util/stringmanipulation';
import I18n from 'i18n-js';
import { useNavigation } from '@react-navigation/native';
import { MainPageNavigationProp } from '../types/navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getFromLocalStorage } from '../util/localStorage';
import { USELOCATION } from '../constants';

interface Props {
  city: string;
  country: string;
  date: number;
  forecastDisabled: boolean;
}

const LocationHeader = ({ city, country, date, forecastDisabled }: Props) => {
  const navigation = useNavigation<MainPageNavigationProp>();

  const dateString =
    dateformat(date, 'dd. ') + I18n.t(dateformat(date, 'mmmm')) + dateformat(date, ' yyyy');

  const goToSearch = () => {
    navigation.navigate('Search');
  };

  const goToWeekOverview = () => {
    if (forecastDisabled) return Alert.alert(I18n.t('noData'), I18n.t('noDataForThisLocation'));
    navigation.navigate('Forecast');
  };

  return (
    <View style={styles.container}>
      <View>
        <MyText style={styles.borderFont}>{dateString}</MyText>
        <TouchableOpacity style={styles.locationContainer} activeOpacity={0.7} onPress={goToSearch}>
          <MyText>
            <Entypo name="location-pin" size={20} />
            <Text style={styles.cityName}>{String(city).toUpperCase()}, </Text>
          </MyText>
          <MyText style={styles.borderFont}>{capitalize(country)}</MyText>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={goToWeekOverview}>
        <Entypo color={MyTheme.colors.border} name="dots-two-horizontal" size={24} />
        <Entypo
          color={MyTheme.colors.border}
          name="dots-two-horizontal"
          size={24}
          style={styles.buttonElement}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LocationHeader;

const styles = StyleSheet.create({
  borderFont: {
    color: MyTheme.colors.border,
  },
  cityName: {
    fontSize: 20,
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
  },
  button: {
    padding: 10,
    margin: -10,
  },
  buttonElement: {
    marginTop: -15,
  },
});
