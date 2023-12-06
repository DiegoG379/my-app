import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../global/colors';

const TotalExpense = ({ products }) => {

    const calculateTotalExpense = () => {
        return products.reduce((total, product) => total + product.price, 0).toFixed(2);
    };

    const totalExpenseText = "Gasto total: $";
    const numericValue = calculateTotalExpense();

    return (
        <View style={styles.container}>
            <Text style={styles.totalText}>{totalExpenseText}
                <Text style={styles.redText}>{numericValue}</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: colors.color_two,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        },
    redText: {
        color: colors.color_three,
        },
});

export default TotalExpense;