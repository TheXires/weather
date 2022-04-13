import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import I18n from 'i18n-js';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MyTheme } from '../theme/colors';
import MyText from './MyText';

interface Props {
  heading: string;
}

const TopBar = ({ heading }: Props) => {
  const navigation = useNavigation();

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
        <MyText style={styles.heading}>{heading}</MyText>
      </View>
      <View style={styles.spread}></View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  spread: {
    position: 'absolute',
    zIndex: 99,
  },
  headingContainer: {
    width: '100%',
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
