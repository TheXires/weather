import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import DetailElement from './DetailElement';

const DetailCard = () => {
  return (
    <BlurView style={styles.container} intensity={20}>
      <View style={styles.row}>
        <DetailElement icon="wind" value="s 9 m/s" />
        <DetailElement icon="droplet" value="85%" />
        <DetailElement icon="cloud-drizzle" value="75%" />
      </View>
      <View style={styles.row}>
        <DetailElement icon="sun" value="4 UV" />
        <DetailElement icon="loader" value="778,3" />
        <DetailElement icon="eye" value="9,7 km" />
      </View>
    </BlurView>
  );
};

export default DetailCard;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  row: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
