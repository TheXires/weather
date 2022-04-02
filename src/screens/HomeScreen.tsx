import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import Text from '../components/Text';
import { MyTheme } from '../theme/colors';
import backgroundImage from '../../assets/worldBackground.png';
import weatherIcon from '../../assets/3dWeatherIcons/sun/30.png';

const HomeScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: MyTheme.colors.background }]}>
      <View style={{ paddingHorizontal: 15, paddingTop: 15 }}>
        <Text style={{ color: MyTheme.colors.border }}>22, April 2021</Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginBottom: 50 }}>
          <Text>London, </Text>
          <Text style={{ color: MyTheme.colors.border }}>United Kingdom</Text>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={{
            minWidth: '100%',
            minHeight: 230,
            aspectRatio: 960 / 491,
            paddingTop: 5,
            alignItems: 'center',
          }}
          blurRadius={5}
        >
          <Image
            source={weatherIcon}
            style={{ width: '40%', maxHeight: 190, aspectRatio: 27 / 29 }}
          />
        </ImageBackground>
        <View style={{ alignItems: 'center', marginTop: -15 }}>
          <Text>Thunder</Text>
          <Text style={{ fontSize: 76 }}>
            21<Text style={{ fontSize: 76, color: MyTheme.colors.primary }}>°</Text>
          </Text>
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
