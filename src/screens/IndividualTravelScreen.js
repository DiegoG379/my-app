import React from 'react';
import { SafeAreaView, StatusBar, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { colors } from '../global/colors';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import OptionsMenu from '../components/OptionsMenu';


const IndividualTravelScreen = ({ route, navigation }) => {
  const { travel, setCuadros, cuadros } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNavigateToEditTravelInfoScreen = () => {
    navigation.navigate('EditTravelInfoScreen', {
      travel,
      onNameChange: handleNameChange,
      index: cuadros.findIndex((cuadro) => cuadro.id === travel.id),
    });
  };

  const handleNameChange = (newName, index) => {
    const updatedCuadros = cuadros.map((cuadro, i) =>
      i === index ? { ...cuadro, contenido: newName } : cuadro
    );
    setCuadros(updatedCuadros);
  };

  const handleDeleteTravel = () => {
    setCuadros(prevCuadros => prevCuadros.filter((cuadro) => cuadro.id !== travel.id));
    navigation.goBack();
  };

  const handleNavigateToProductListScreen = () => {
    navigation.navigate('ProductList');
  };

  const handleNavigateToPackingListScreen = () => {
    navigation.navigate('PackingList');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={travel.contenido} />
      <BackButton onPress={handleGoBack} />
      <OptionsMenu onEditPress={handleNavigateToEditTravelInfoScreen} onDeletePress={handleDeleteTravel}/>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleNavigateToProductListScreen}>
          <Text style={styles.buttonText}>Lista de Gastos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNavigateToPackingListScreen}>
          <Text style={styles.buttonText}>Lista de Tareas</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    height: 45,
    width: 150,
    marginTop: 15,
    backgroundColor: colors.colorOne,
    padding: 7,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'amaticBold',
    letterSpacing: 1.5,
  },
});

export default IndividualTravelScreen;
