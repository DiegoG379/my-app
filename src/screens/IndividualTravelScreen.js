import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import BackButton from '../components/BackButton';

const IndividualTravelScreen = ({ route, navigation }) => {
  const { travel } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView> 
      <Header title={travel.contenido}/>
      <BackButton onPress={handleGoBack}/>
      <Text>hola gil</Text>
    </SafeAreaView>
  );
};

export default IndividualTravelScreen;

