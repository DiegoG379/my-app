import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../global/colors';

const PackingListItem = ({ item, onToggle, onDelete }) => (
  <View style={styles.listItem}>
    <Switch value={item.checked} onValueChange={() => onToggle(item.id)} trackColor={{ false: colors.color_two, true: colors.color_one }} thumbColor={item.checked ? colors.color_four : colors.color_six}/>
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
    borderBottomColor: colors.color_two,
  },
  deleteButton: {
    color: colors.color_three,
    marginLeft: 10,
    fontWeight: 'bold',
    },
    checkedText: {
      color: colors.color_four,
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },
    uncheckedText: {
      color: colors.color_five,
      fontWeight: 'normal',
      textTransform: 'capitalize',
    },
});

export default PackingListItem;
