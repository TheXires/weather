import { useNavigation } from '@react-navigation/native';
import I18n from 'i18n-js';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Keyboard, Pressable, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { getCityByNameOpenWeather } from '../api/openWeather';
import SearchBar from '../components/SearchBar';
import SearchResultRow from '../components/SearchResultRow';
import TopBar from '../components/TopBar';
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

    return () => clearTimeout(delay);
  }, [searchTerm]);

  const getCurrentLocation = async () => {
    try {
      const location = await getLocation();
      if (location == null) return;
      setLocation(location);
    } catch (error) {
      console.error('getLocation: ', error);
    }
  };

  const selectCity = (location: Location) => {
    setLocation(location);
    navigation.goBack();
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <TopBar heading={I18n.t('search')} />
      <SearchBar input={searchTerm} setInput={setSearchTerm} />
      {cities != null && (
        <FlatList
          data={cities}
          keyExtractor={(item: City) => item.name + item.country}
          renderItem={({ item }) => <SearchResultRow onPress={selectCity} city={item} />}
        />
      )}
      <Button title="get Location" onPress={getCurrentLocation} color="white" />
    </Pressable>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
