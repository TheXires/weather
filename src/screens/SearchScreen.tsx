import I18n from 'i18n-js';
import React, { useContext, useState } from 'react';
import { Button, Keyboard, Pressable, StyleSheet, View } from 'react-native';
import MyText from '../components/MyText';
import SearchBar from '../components/SearchBar';
import TopBar from '../components/TopBar';
import { WeatherContext } from '../contexts/WeatherContext';
import { WeatherContextType } from '../types/context';
import { getLocation } from '../util/location';

const SearchScreen = () => {
  const { setLocation } = useContext<WeatherContextType>(WeatherContext);

  const [searchText, setSearchText] = useState<string>('');

  const getCurrentLocation = async () => {
    try {
      const location = await getLocation();
      if (location == null) return;
      setLocation(location);
    } catch (error) {
      console.error('getLocation: ', error);
    }
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <TopBar heading={I18n.t('search')} />
      <SearchBar input={searchText} setInput={setSearchText} />
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
