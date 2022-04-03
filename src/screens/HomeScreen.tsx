import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import weatherIcon from '../../assets/3dWeatherIcons/sun/30.png';
import backgroundImage from '../../assets/worldBackground.png';
import LocationHeader from '../components/LocationHeader';
import MyText from '../components/MyText';
import { MyTheme } from '../theme/colors';

const HomeScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: MyTheme.colors.background }]}>
      <LocationHeader date={Date.now()} city="essen" country="germany" />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={{
            minWidth: '100%',
            minHeight: 250,
            aspectRatio: 960 / 491,
            paddingTop: 10,
            alignItems: 'center',
            marginLeft: 25,
          }}
          blurRadius={5}
        >
          <Image
            source={weatherIcon}
            style={{ width: '40%', maxHeight: 190, aspectRatio: 27 / 29 }}
          />
        </ImageBackground>
        <View style={{ alignItems: 'center', marginTop: -20 }}>
          <MyText>Thunder</MyText>
          <MyText style={{ fontSize: 76 }}>
            21<MyText style={{ fontSize: 76, color: MyTheme.colors.primary }}>°</MyText>
          </MyText>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
