import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native'; 
import { colors } from '../global/colors';

const TravelBox = ({ item, navigation }) => (
  <TouchableOpacity key={item.id} style={styles.box} onPress={() => handleNavigateToIndividualTravel(item, navigation)}>
    <Text>{item.contenido}</Text>
  </TouchableOpacity>
);

const handleNavigateToIndividualTravel = (item, navigation) => {
  navigation.navigate('IndividualTravel', { travel: item });
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: colors.colorFive,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.colorSix,
  },
});

export default TravelBox;