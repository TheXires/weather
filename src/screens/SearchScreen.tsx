import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import I18n from 'i18n-js';
import React, { useContext, useEffect, useState } from 'react';
import { Keyboard, Pressable, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { getCityByNameOpenWeather } from '../api/openWeather';
import HorizontalLine from '../components/HorizontalLine';
import SearchBar from '../components/SearchBar';
import SearchResultRow from '../components/SearchResultRow';
import TopBar from '../components/TopBar';
import { USELOCATION } from '../constants';
import { WeatherContext } from '../contexts/WeatherContext';
import { WeatherContextType } from '../types/context';
import { City, Location } from '../types/location';
import { getLocation } from '../util/location';

const SearchScreen = () => {
  const navigation = useNavigation();
  const { setLocation } = useContext<WeatherContextType>(WeatherContext);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [cities, setCities] = useState<City[] | undefined>();

  useEffect(() => {
    const delay = setTimeout(async () => {
      console.log('called');
      if (searchTerm.length < 3) return;
      const possibleCities = await getCityByNameOpenWeather(searchTerm);
      setCities(possibleCities);
      console.log(possibleCities);
    }, 1500);

    setCities(undefined);

    return () => clearTimeout(delay);
  }, [searchTerm]);

  const getCurrentLocation = async () => {
    try {
      const location = await getLocation();
      if (location == null) return;
      AsyncStorage.setItem(USELOCATION, 'true');
      setLocation(location);
    } catch (error) {
      console.error('getLocation: ', error);
    }
    navigation.goBack();
  };

  const selectCity = (location: Location) => {
    setLocation(location);
    AsyncStorage.setItem(USELOCATION, 'false');
    navigation.goBack();
  };

  const currentLocation: City = {
    name: I18n.t('currentLocation'),
    lon: 0,
    lat: 0,
    country: '',
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <TopBar heading={I18n.t('search')} />
      <SearchBar input={searchTerm} setInput={setSearchTerm} />
      <FlatList
        data={cities}
        keyExtractor={(item: City) => item.name + item.lat + item.lon}
        renderItem={({ item }) => <SearchResultRow onPress={selectCity} city={item} />}
        ItemSeparatorComponent={() => <HorizontalLine style={styles.separator} />}
        ListHeaderComponent={() => (
          <SearchResultRow onPress={getCurrentLocation} city={currentLocation} />
        )}
      />
    </Pressable>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    marginVertical: 3,
    width: '90%',
    alignSelf: 'center',
  },
});
