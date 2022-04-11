import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFromLocalStorage = async (key: string): Promise<any | null> => {
  try {
    const localString = await AsyncStorage.getItem(key);
    const localObject: Location | null = localString != null ? JSON.parse(localString) : null;

    return localObject;
  } catch (error) {
    console.error('getFromLocalStorage error: ', error);
    return null;
  }
};
