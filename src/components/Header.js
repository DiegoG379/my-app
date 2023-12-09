import React from 'react';
import { SafeAreaView, StatusBar, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { colors } from '../global/colors';
import { fonts } from '../global/fonts';

const Header = ({ title, onBackPress }) => (
  <SafeAreaView style={styles.header}>
    <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
      <Text style={styles.backText}>{'< Back'}</Text>
    </TouchableOpacity>
    <Text style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </Text>
    <Image source={require('../20190826_134605.jpg')} style={styles.backgroundImage}/>
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
  backButton: {
    padding: 12,
    alignSelf: 'flex-end',
  },
  backText: {
    fontFamily: 'amaticBold',
    color: colors.colorFive,
    fontSize: 25,
  },
  titleContainer: {
    padding: 12,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'amaticBold',
    fontSize: 50,
    color: colors.colorFive,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    opacity: 0.6,
    zIndex: -1,
  },
});

export default Header;
