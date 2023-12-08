import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../global/colors';

const CardProduct = ({ item, onDelete }) => (
    <View style={styles.listItem}>
        <Text style={styles.productListItem}>{`${item.name} - $${item.price}`}</Text>
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
    borderBottomColor: colors.colorTwo,
    },
    deleteButton: {
    color: colors.colorThree,
    marginLeft: 10,
    fontWeight: 'bold',
    },
    productListItem: {
        textTransform: 'capitalize',
    }
});

export default CardProduct;
