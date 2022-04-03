import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface Props {
  height: number;
}

const Spacer = ({ height }: Props) => {
  return <View style={{ height }} />;
};

export default Spacer;
