import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const PackingListItem = ({ item, onToggle, onDelete }) => (
  <View style={styles.listItem}>
    <Switch value={item.checked} onValueChange={() => onToggle(item.id)} trackColor={{ false: '#ccc', true: 'lightblue' }} thumbColor={item.checked ? '#4682B4' : '#fff'}/>
    <Text style={item.checked ? styles.checkedText : styles.uncheckedText}>{item.name}</Text>
    <TouchableOpacity onPress={() => onDelete(item.id)}>
      <Text style={styles.deleteButton}>X</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10,
    fontWeight: 'bold',
    },
    checkedText: {
      color: '#4682B4',
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },
    uncheckedText: {
      color: 'black',
      fontWeight: 'normal',
      textTransform: 'capitalize',
    },
});

export default PackingListItem;
