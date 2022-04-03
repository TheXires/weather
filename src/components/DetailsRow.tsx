import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DetailElement from './DetailElement';
import { ScrollView } from 'react-native-gesture-handler';
import I18n from 'i18n-js';

const DetailsRow = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={91}
      style={styles.container}
    >
      <DetailElement icon="wind" value="s 9 m/s" />
      <DetailElement icon="droplet" value="85%" />
      <DetailElement icon="cloud-drizzle" value="75%" />
      <DetailElement icon="sun" value="4 UV" />
      <DetailElement icon="loader" value="778,3" />
      <DetailElement icon="eye" value="9,7 km" />
    </ScrollView>
  );
};

export default DetailsRow;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
