import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import I18n from 'i18n-js';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MyTheme } from '../theme/colors';
import { ForecastPageNavigationProp } from '../types/navigation';
import MyText from './MyText';

const TopBar = () => {
  const navigation = useNavigation<ForecastPageNavigationProp>();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.spread}>
        <TouchableOpacity onPress={goBack} style={styles.button} activeOpacity={0.7}>
          <Feather name="chevron-left" size={32} color={MyTheme.colors.border} />
        </TouchableOpacity>
      </View>
      <View style={styles.headingContainer}>
        <MyText style={styles.heading}>{I18n.t('forecast')}</MyText>
      </View>
      <View style={styles.spread}></View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 15,
  },
  spread: {
    width: '30%',
  },
  headingContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    color: MyTheme.colors.border,
  },
  button: {
    padding: 10,
  },
});
