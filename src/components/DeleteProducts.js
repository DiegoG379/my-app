import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../global/colors';

const DeleteProducts = ({ onDelete }) => (
    <TouchableOpacity onPress={onDelete}>
        <Text style={styles.deleteButton}>Eliminar</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    deleteButton: {
    color: colors.color_three,
    marginLeft: 10,
    marginTop: 10,
    },
});

export default DeleteProducts;
