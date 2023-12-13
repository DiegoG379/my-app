import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../global/colors';

const PackingListItem = ({ item, onToggle, onDelete }) => (
  <View style={styles.listItem}>
    <Switch value={item.checked} onValueChange={() => onToggle(item.id)} trackColor={{ false: colors.colorTwo, true: colors.colorOne }} thumbColor={item.checked ? colors.colorFour : colors.colorSix}/>
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
    borderBottomColor: colors.colorFour,
  },
  deleteButton: {
    color: colors.colorThree,
    marginLeft: 10,
    fontWeight: 'bold',
    },
    checkedText: {
      color: colors.colorFour,
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },
    uncheckedText: {
      color: colors.colorFive,
      fontWeight: 'normal',
      textTransform: 'capitalize',
    },
});

export default PackingListItem;
