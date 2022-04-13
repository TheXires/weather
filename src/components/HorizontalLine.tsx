import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

interface Props {
  style: StyleProp<ViewStyle>;
}

function HorizontalLine({ style }: Props) {
  const { colors } = useTheme();

  return (
    <View
      style={[{ backgroundColor: colors.text, height: 1, opacity: 0.1, width: '100%' }, style]}
    />
  );
}

export default HorizontalLine;
