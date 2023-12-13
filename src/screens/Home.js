import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity,Text, StyleSheet } from 'react-native';
import PackingListScreen from './PackingListScreen';
import ProductListScreen from './ProductListScreen';

const HomeScreen = () => {
    const [currentScreen, setCurrentScreen] = useState(null);

    const handleShowPackingList = () => {
        setCurrentScreen('packingList');
    };

    const handleShowProductList = () => {
        setCurrentScreen('productList');
    };

    return (
        <SafeAreaView style={styles.container}>
            {currentScreen === 'packingList' && (
                <PackingListScreen onBackPress={() => setCurrentScreen(null)}/>
            )}
            {currentScreen === 'productList' && (
                <ProductListScreen onBackPress={() => setCurrentScreen(null)}/>
            )}
            {currentScreen === null && (
                <View style={styles.buttonsContainer}>
                    <Button onPress={handleShowPackingList} label="Lista de Tareas"/>
                    <Button onPress={handleShowProductList} label="Lista de Gastos"/>
                </View>
            )}
        </SafeAreaView>
    );
};

const Button = ({ onPress, label }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    button: {
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
