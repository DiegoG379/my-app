import React from 'react';
import { SafeAreaView, StatusBar, Text, Image, StyleSheet, View } from 'react-native';
import { colors } from '../global/colors';

const Header = ({ title }) => (
  <SafeAreaView style={styles.header}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <Image source={require('../../assets/images/headerWallpaper.jpg')} style={styles.backgroundImage} />
    <StatusBar style="auto" />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'amaticBold',
    fontSize: 50,
    color: colors.colorSix,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    opacity: 1,
    zIndex: -1,
  },
});

export default Header;
