import React, { useContext } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import MyText from '../components/MyText';
import { WeatherContext } from '../contexts/WeatherContext';
import { WeatherContextType } from '../types/context';
import { getLocation } from '../util/location';

const SearchScreen = () => {
  const { setLocation } = useContext<WeatherContextType>(WeatherContext);

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
    <View>
      <MyText>SearchScreen</MyText>
      <Button title="get Location" onPress={getCurrentLocation} color="white" />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
