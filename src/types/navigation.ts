import { StackNavigationProp } from '@react-navigation/stack';

/**
 * Type containing all screens for rootStack
 */
export type RootStackParamList = {
  Main: undefined;
  Search: undefined;
  Forecast: undefined;
};

export type MainPageNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;
export type SearchPageNavigationProp = StackNavigationProp<RootStackParamList, 'Search'>;
export type ForecastPageNavigationProp = StackNavigationProp<RootStackParamList, 'Forecast'>;
