import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import OptionsMenu from '../components/OptionsMenu';

const IndividualTravelScreen = ({ route, navigation }) => {
  const { travel, setCuadros, cuadros } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNavigateToEditTravelInfoScreen = () => {
    navigation.navigate('EditTravelInfoScreen', { travel });
  };

  const handleDeleteTravel = () => {
    setCuadros(prevCuadros => prevCuadros.filter((cuadro) => cuadro.id !== travel.id));
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Header title={travel.contenido}/>
      <BackButton onPress={handleGoBack}/>
      <OptionsMenu onEditPress={handleNavigateToEditTravelInfoScreen} onDeletePress={handleDeleteTravel}/>
      <Text>En construcción</Text>
    </SafeAreaView>
  );
};

export default IndividualTravelScreen;
