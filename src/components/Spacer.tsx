import React from 'react';
import { View } from 'react-native';

interface Props {
  height: number;
}

const Spacer = ({ height }: Props) => {
  return <View style={{ height }} />;
};

export default Spacer;
