import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../global/colors';
import Header from '../components/Header';
import TravelBox from '../components/TravelBox';
import DeleteProducts from '../components/DeleteProducts';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [cuadros, setCuadros] = useState([]);
  const [ultimoId, setUltimoId] = useState(0);

  const handleNewProject = () => {
    const nuevoCuadro = {
      id: ultimoId + 1,
      contenido: `Viaje ${ultimoId + 1}`,
    };

    setUltimoId(ultimoId + 1);
    setCuadros([...cuadros, nuevoCuadro]);
  };

  const handleReset = () => {
    setCuadros([]);
    setUltimoId(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Bitácora de viajes'/>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleNewProject}>
          <Text style={styles.plusSign}>Nuevo Viaje</Text>
        </TouchableOpacity>
        <DeleteProducts onDelete={handleReset} confirmationQuestion="¿Estás seguro de que deseas eliminar todos tus viajes?"/>
      </View>
      <FlatList data={cuadros} renderItem={({ item, index }) => ( <TravelBox item={item} index={index} navigation={navigation} setCuadros={setCuadros} cuadros={cuadros} />)} keyExtractor={(item) => item.id.toString()} numColumns={2} contentContainerStyle={styles.flatListContainer}/>
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
});

export default HomeScreen;