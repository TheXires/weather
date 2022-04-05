import React from 'react';
import { FlatList, Image, Platform, StyleSheet, View } from 'react-native';
import backgroundImage from '../../assets/worldBackground.png';
import DetailCard from '../components/DetailCard';
import ForecastRow from '../components/ForecastRow';
import OverViewHeader from '../components/OverViewHeader';
import TopBar from '../components/TopBar';

const ForecastScreen = () => {
  const dummyData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage}
        resizeMode="contain"
        style={styles.backgroundImage}
        blurRadius={Platform.OS === 'ios' ? 0 : 5}
      />
      <TopBar />
      <OverViewHeader />
      <DetailCard />
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item, index }) => <ForecastRow weatherIcon="snow" i={index} />}
        showsVerticalScrollIndicator={false}
        style={styles.flatListContainer}
      />
    </View>
  );
};

export default ForecastScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 65,
    left: -260,
    height: 250,
    aspectRatio: 960 / 491,
    alignItems: 'center',
  },
  flatListContainer: {
    width: '100%',
  },
});
