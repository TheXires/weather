import {
  Jost_100Thin,
  Jost_200ExtraLight,
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold,
  Jost_800ExtraBold,
  Jost_900Black,
} from '@expo-google-fonts/jost';
import { useFonts } from 'expo-font';
import React from 'react';
import { StyleProp, StyleSheet, Text as DefaultText, TextStyle } from 'react-native';
import { MyTheme } from '../theme/colors';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  fontWeight?:
    | 'thin'
    | '100'
    | 'extraLight'
    | '200'
    | 'light'
    | '300'
    | 'default'
    | '400'
    | 'medium'
    | '500'
    | 'semiBold'
    | '600'
    | 'bold'
    | '700'
    | 'extraBold'
    | '800'
    | 'black'
    | '900';
}

const MyText = ({ children, style, fontWeight = 'default' }: Props) => {
  const [fontsLoaded] = useFonts({
    Jost_100Thin,
    Jost_200ExtraLight,
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold,
    Jost_800ExtraBold,
    Jost_900Black,
  });

  if (!fontsLoaded) return null;

  let fontFamily = 'Jost_400Regular';

  switch (fontWeight) {
    case 'thin':
    case '100':
      fontFamily = 'Jost_100Thin';
      break;
    case 'extraLight':
    case '200':
      fontFamily = 'Jost_200ExtraLight';
      break;
    case 'light':
    case '300':
      fontFamily = 'Jost_300Light';
      break;
    case 'default':
    case '400':
      fontFamily = 'Jost_400Regular';
      break;
    case 'medium':
    case '500':
      fontFamily = 'Jost_500Medium';
      break;
    case 'semiBold':
    case '600':
      fontFamily = 'Jost_600SemiBold';
      break;
    case 'bold':
    case '700':
      fontFamily = 'Jost_700Bold';
      break;
    case 'extraBold':
    case '800':
      fontFamily = 'Jost_800ExtraBold';
      break;
    case 'black':
    case '900':
      fontFamily = 'Jost_900Black';
      break;
    default:
      break;
  }

  return <DefaultText style={[styles.font, { fontFamily }, style]}>{children}</DefaultText>;
};

export default MyText;

const styles = StyleSheet.create({
  font: {
    color: MyTheme.colors.text,
    fontSize: 18,
  },
});
