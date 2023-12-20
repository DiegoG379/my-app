import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../global/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const OptionsMenu = ({ onEditPress, onDeletePress }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={handleToggleMenu} style={styles.optionsButton}>
            <Icon style={styles.icon} name="ellipsis-v" size={24}/>
        </TouchableOpacity>
        {showMenu && (
            <View style={styles.menu}>
            <TouchableOpacity onPress={onEditPress} style={styles.menuItem}>
                <Icon name="edit" size={20} color={colors.colorOne}/>
                <Text style={styles.menuItemText}>Editar viaje</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDeletePress} style={styles.menuItem}>
                <Icon name="trash" size={20} color={colors.colorThree}/>
                <Text style={styles.menuItemText}>Eliminar viaje</Text>
            </TouchableOpacity>
            </View>
        )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        zIndex: 1,
    },
    optionsButton: {
        position: 'absolute',
        top: -30,
        right: 10,
        zIndex: 1,
        padding: 10,
        margin: -10,
    },
    icon: {
        color: colors.colorFour,
    },
    menu: {
        position: 'absolute',
        top: 0,
        right: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        elevation: 10,
        zIndex: 0,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    menuItemText: {
        fontSize: 16,
        marginLeft: 10,
    },
});

export default OptionsMenu;
