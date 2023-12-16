import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, FlatList, View, StyleSheet, StatusBar } from 'react-native';
import { colors } from '../global/colors';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import PackingListItem from '../components/PackingListItem';
import DeleteProducts from '../components/DeleteProducts';

const PackingListScreen = ({ onBackPress }) => {
  const [data, setData] = useState([]);
  const [newItemName, setNewItemName] = useState('');

  const handleAddItem = () => {
    if (newItemName.trim() !== '') {
      setData((prevData) => [
        ...prevData,
        { id: String(prevData.length + 1), name: newItemName.trim(), checked: false },
      ]);
      setNewItemName('');
    }
  };

  const handleToggleItem = (itemId) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleDeleteItem = (itemId) => {
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
  };

  const renderItem = ({ item }) => (
    <PackingListItem item={item} onToggle={handleToggleItem} onDelete={handleDeleteItem}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Lista de Tareas"/>
      <BackButton onPress={onBackPress}/>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Añadir elemento" value={newItemName} onChangeText={(text) => setNewItemName(text)}/>
        <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Text style={styles.addButtonText}>Añadir</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id}/>
      <DeleteProducts onDelete={() => setData([])} confirmationQuestion="¿Estás seguro que quieres eliminar todos los elementos de la lista de tareas?"/>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorSix,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
    padding: 10
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: colors.colorFour,
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 10,
  },
  addButton: {
    backgroundColor: colors.colorOne,
    padding: 10,
    borderRadius: 5,
  },
  addButtonText:{
    color: colors.colorSix,
    fontSize: 15,
  },
});

export default PackingListScreen