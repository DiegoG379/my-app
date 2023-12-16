import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../global/colors';
import Header from '../components/Header';
import TravelBox from '../components/TravelBox';
import DeleteProducts from '../components/DeleteProducts';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [cuadros, setCuadros] = React.useState([]);

  const handleNewProject = () => {
    const nuevoCuadro = {
      id: cuadros.length + 1,
      contenido: `Viaje ${cuadros.length + 1}`,
    };

    setCuadros([...cuadros, nuevoCuadro]);
  };

  const handleReset = () => {
    setCuadros([]);
  };

  const handleNavigateToIndividualTravel = (item) => {
    navigation.navigate('IndividualTravel', { travel: item });
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity key={item.id} style={styles.box} onPress={() => handleNavigateToIndividualTravel(item)}>
      <TravelBox item={item} index={index} navigation={navigation} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Bitácora de viajes'/>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleNewProject}>
          <Text style={styles.plusSign}>Nuevo Viaje</Text>
        </TouchableOpacity>
        <DeleteProducts onDelete={handleReset} confirmationQuestion="¿Estás seguro de que deseas eliminar todos tus viajes?"/>
      </View>
      <FlatList data={cuadros} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} numColumns={2} contentContainerStyle={styles.flatListContainer}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorSix,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  addButton: {
    height: 45,
    width: 150,
    marginTop: 15,
    backgroundColor: colors.colorOne,
    padding: 7,
    borderRadius: 5,
  },
  plusSign: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'amaticBold',
    letterSpacing: 1.5,
  },
  flatListContainer: {
    paddingVertical: 10,
  },
  box: {
    flex: 1,
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: colors.colorFour,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 7,
    padding: -5,
    borderRadius: 10,
    backgroundColor: colors.colorOne,
  },
});

export default HomeScreen;