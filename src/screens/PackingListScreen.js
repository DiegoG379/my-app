import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, FlatList, View, StyleSheet, StatusBar } from 'react-native';
import PackingListItem from '../components/PackingListItem';
import DeleteProducts from '../components/DeleteProducts';

const PackingListScreen = () => {
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
      <Text style={styles.title}>Lista de Tareas</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Añadir elemento" value={newItemName} onChangeText={(text) => setNewItemName(text)}/>
        <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Text>Añadir</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
      <DeleteProducts onDelete={() => setData([])} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 10,
  },
  title: {
    fontSize: 38,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 5,
  },
  addButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
});

export default PackingListScreen