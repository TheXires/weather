import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';

/**
 * Custom light theme based on default light theme with changed primary color
 */
export const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFD55E',
    background: '#100F14',
    card: '#101014',
    text: '#FFFFFF',
    border: '#868686',
  },
};
