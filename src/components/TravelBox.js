import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native'; 
import { colors } from '../global/colors';

const TravelBox = ({ item, navigation }) => (
  <TouchableOpacity key={item.id} style={styles.box} onPress={() => handleNavigateToIndividualTravel(item, navigation)}>
    <Text style={styles.travelText}>{item.contenido}</Text>
  </TouchableOpacity>
);

const handleNavigateToIndividualTravel = (item, navigation) => {
  navigation.navigate('IndividualTravel', { travel: item });
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: colors.colorFour,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: colors.colorSix,
  },
  travelText: {
    fontSize: 22,
    textAlign: 'center',
    position: 'absolute',
    bottom: -25,
    width: '100%',
    fontFamily: 'amaticBold',
    letterSpacing: 1,
    color: colors.colorFive,
  },
});

export default TravelBox;