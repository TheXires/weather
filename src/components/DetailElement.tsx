import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MyTheme } from '../theme/colors';
import { Feather } from '@expo/vector-icons';
import MyText from './MyText';

interface Props {
  icon: keyof typeof Feather.glyphMap;
  description?: string;
  value: string;
}

const DetailElement = ({ icon, description, value }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Feather name={icon} size={24} color={MyTheme.colors.text} />
      </View>
      {description && (
        <MyText style={[styles.text, { color: MyTheme.colors.border }]}>{description}</MyText>
      )}
      <MyText style={styles.text}>{value}</MyText>
    </View>
  );
};

export default DetailElement;

const styles = StyleSheet.create({
  container: {
    width: 61,
    marginHorizontal: 15,
    alignItems: 'center',
  },
  circle: {
    backgroundColor: '#333333',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
  },
});
