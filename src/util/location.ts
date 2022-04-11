import * as Location from 'expo-location';
import I18n from 'i18n-js';
import { Alert } from 'react-native';
import { Location as LocationType } from '../types/location';

/**
 * gets the users location
 *
 * @returns users location or null
 */
export const getLocation = async (): Promise<LocationType | null> => {
  try {
    const { status } = await Location.getForegroundPermissionsAsync();
    if (status !== 'granted') {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(I18n.t('missingPermissions'), I18n.t('missingLocationPermission'));
        return null;
      }
      return getLocation();
    }
    let position = await Location.getLastKnownPositionAsync({ maxAge: 60 * 60 * 1000 });
    if (position == null) {
      position = await Location.getCurrentPositionAsync({ accuracy: 1 });
      console.log('request new location');
    }
    return {
      lat: Number(position.coords.latitude.toFixed(3)),
      lon: Number(position.coords.longitude.toFixed(3)),
    };
  } catch (error) {
    console.error('getLocation: ', error);
    return null;
  }
};
