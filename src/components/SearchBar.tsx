import { Feather } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import I18n from 'i18n-js';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { MyTheme } from '../theme/colors';

interface Props {
  input: string;
  setInput: (input: string) => void;
}

const SearchBar = ({ input, setInput }: Props) => {
  return (
    <BlurView style={styles.container} intensity={20}>
      <View style={styles.sideContainer}>
        <Feather name="search" size={24} color={MyTheme.colors.border} />
      </View>
      <View style={styles.middleContainer}>
        <TextInput
          placeholder={I18n.t('city')}
          value={input}
          onChangeText={(text: string) => setInput(text)}
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity
        style={styles.sideContainer}
        activeOpacity={0.7}
        onPress={() => setInput('')}
      >
        <Feather name="x" size={18} color={MyTheme.colors.border} />
      </TouchableOpacity>
    </BlurView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '90%',
    alignItems: 'center',
    borderRadius: 30,
    overflow: 'hidden',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sideContainer: {
    width: 60,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleContainer: {
    flex: 1,
    height: '100%',
  },
  rightContainer: {
    width: 50,
  },
  textInput: {
    width: '100%',
    height: '100%',
    fontSize: 20,
    color: MyTheme.colors.text,
  },
});
