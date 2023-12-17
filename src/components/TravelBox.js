import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import { colors } from '../global/colors';

const TravelBox = ({ item, setCuadros, cuadros }) => {
  const navigation = useNavigation();

  const handleNavigateToIndividualTravel = () => {
    navigation.navigate('IndividualTravel', { travel: item, setCuadros, cuadros });
  };

  return (
    <TouchableOpacity key={item.id} style={styles.box} onPress={handleNavigateToIndividualTravel}>
      <Text style={styles.travelText}>{item.contenido}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    aspectRatio: 1,
    borderWidth: 5,
    borderColor: colors.colorFour,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: colors.colorSix,
  },
  travelText: {
    fontSize: 22,
    textAlign: 'center',
    position: 'absolute',
    bottom: -28,
    width: '100%',
    fontFamily: 'amaticBold',
    letterSpacing: 1,
    color: colors.colorFive,
  },
});

export default TravelBox;
