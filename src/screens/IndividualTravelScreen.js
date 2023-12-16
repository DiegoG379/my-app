import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import OptionsMenu from '../components/OptionsMenu';

const IndividualTravelScreen = ({ route, navigation }) => {
  const { travel } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNavigateToEditTravelInfoScreen = () => {
    navigation.navigate('EditTravelInfoScreen', { travel });
  };

  return (
    <SafeAreaView>
      <Header title={travel.contenido}/>
      <BackButton onPress={handleGoBack}/>
      <OptionsMenu onEditPress={handleNavigateToEditTravelInfoScreen}/>
      <Text>En construccion</Text>
    </SafeAreaView>
  );
};

export default IndividualTravelScreen;