import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, FlatList, Text } from 'react-native';
import { colors } from '../global/colors';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import CardProduct from '../components/CardProduct';
import AddProducts from '../components/AddProducts';
import DeleteProducts from '../components/DeleteProducts';
import TotalExpense from '../components/TotalExpense';



const ProductListScreen = ({ onBackPress }) => {
    const [data, setData] = useState([]);

    const handleAddItem = (newItem) => {
    setData((prevData) => [...prevData, { id: String(prevData.length + 1), ...newItem }]);
    };

    const handleDeleteItem = (itemId) => {
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
    };

    const renderItem = ({ item }) => (
    <CardProduct item={item} onDelete={() => handleDeleteItem(item.id)} />
    );

return (
    <SafeAreaView style={styles.container}>
        <Header title="Lista de Gastos"/>
        <BackButton onPress={onBackPress}/>
        <AddProducts onAdd={handleAddItem}/>
        <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id}/>
        <TotalExpense products={data}/>
        <DeleteProducts onDelete={() => setData([])} confirmationQuestion="¿Estás seguro que quieres eliminar todos los elementos de la lista de gastos?"/>
        <StatusBar style="auto"/>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.colorSix,
    },
});

export default ProductListScreen;
