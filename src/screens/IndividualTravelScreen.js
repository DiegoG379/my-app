import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
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
      travel, onNameChange: handleNameChange, index: cuadros.findIndex((cuadro) => cuadro.id === travel.id),
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

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <Header title={travel.contenido}/>
      <BackButton onPress={handleGoBack}/>
      <OptionsMenu onEditPress={handleNavigateToEditTravelInfoScreen} onDeletePress={handleDeleteTravel}/>
      <Text>En construcción</Text>
    </SafeAreaView>
  );
};

export default IndividualTravelScreen;
