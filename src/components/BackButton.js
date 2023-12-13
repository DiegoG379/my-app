import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../global/colors';

const BackButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.backButton}>
        <Text style={styles.backText}>{'< Back'}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    backButton: {
        padding: 5,
        alignSelf: 'flex-start',
    },
    backText: {
        fontFamily: 'amaticBold',
        color: colors.colorFour,
        fontSize: 28,
    },
});

export default BackButton;