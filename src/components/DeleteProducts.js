import React from 'react';
import { Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { colors } from '../global/colors';

const DeleteProducts = ({ onDelete, confirmationQuestion }) => {
    const handleDelete = () => {
        Alert.alert(
        'Confirmación',
        confirmationQuestion || '¿Estás seguro de que deseas realizar esta acción?',
        [{text: 'Cancelar', style: 'cancel'}, {text: 'Eliminar', onPress: onDelete}],
        { cancelable: false }
        );
    };

    return (
        <TouchableOpacity onPress={handleDelete}>
            <Text style={styles.deleteButton}>Eliminar</Text>
        </TouchableOpacity>
    );
    };

const styles = StyleSheet.create({
    deleteButton: {
        height: 45,
        width: 150,
        textAlign: 'center',
        color: colors.colorSix,
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 15,
        fontSize: 18,
        backgroundColor: colors.colorThree,
        padding: 10,
        borderRadius: 5,
        fontFamily: 'amaticBold',
        letterSpacing: 1,
    },
});

export default DeleteProducts;
