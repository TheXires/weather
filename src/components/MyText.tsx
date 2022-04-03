import { Jost_400Regular } from '@expo-google-fonts/jost';
import { useFonts } from 'expo-font';
import React from 'react';
import { StyleProp, StyleSheet, Text as DefaultText, TextStyle } from 'react-native';
import { MyTheme } from '../theme/colors';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const MyText = ({ children, style }: Props) => {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <DefaultText style={[styles.font, { fontFamily: 'Jost_400Regular' }, style]}>
      {children}
    </DefaultText>
  );
};

export default MyText;

const styles = StyleSheet.create({
  font: {
    color: MyTheme.colors.text,
    fontSize: 18,
  },
});
