import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const DeleteProducts = ({ onDelete }) => (
    <TouchableOpacity onPress={onDelete}>
        <Text style={styles.deleteButton}>Eliminar</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    deleteButton: {
    color: 'red',
    marginLeft: 10,
    marginTop: 10,
    },
});

export default DeleteProducts;
