import * as Localization from 'expo-localization';
import I18n from 'i18n-js';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { de, en } from './src/i18n';
import { Navigation } from './src/navigation';
import { MyTheme } from './src/theme/colors';

export default function App() {
  I18n.fallbacks = true;
  // eslint-disable-next-line sort-keys
  I18n.translations = { en, de };
  I18n.locale = Localization.locale;

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={MyTheme.colors.background} />
      <SafeAreaView style={style.container}>
        <Navigation />
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: MyTheme.colors.background,
    flex: 1,
  },
});
