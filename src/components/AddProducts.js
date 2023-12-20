import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../global/colors';

const AddProducts = ({ onAdd }) => {
    const [newItemName, setNewItemName] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');

    const handleAddItem = () => {
        if (newItemName && newItemPrice) {
            onAdd({ name: newItemName, price: parseFloat(newItemPrice) });
            setNewItemName('');
            setNewItemPrice('');
        }
    };

    const handlePriceChange = (text) => {
        const numericValue = text.replace(/[^0-9.]/g, '');

        const decimalCount = numericValue.split('.').length - 1;
        if (decimalCount > 1) {
            return;
        }

        setNewItemPrice(numericValue);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Nombre" value={newItemName} onChangeText={(text) => setNewItemName(text)}/>
            <TextInput style={styles.input} placeholder="Precio" value={newItemPrice} onChangeText={handlePriceChange} keyboardType="numeric"/>
            <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
                <Text style={styles.addButtonText}>Añadir</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
        padding: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: colors.colorFour,
        borderWidth: 1,
        marginRight: 10,
        paddingLeft: 5,
        textAlign: 'center',
    },
    addButton: {
        backgroundColor: colors.colorOne,
        padding: 10,
        borderRadius: 5,
    },
    addButtonText: {
        color: colors.colorSix,
        fontSize: 15,
    },
});

export default AddProducts;

