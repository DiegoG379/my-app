import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../global/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from '../components/BackButton';

const EditTravelInfoScreen = ({ route, navigation}) => {
    const { travel, index, onNameChange } = route.params;
    const [newName, setNewName] = useState(travel.contenido);

    const handleNameChange = (text) => {
        setNewName(text);
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleSaveChanges = () => {
        handleNameChange(newName);
        if (onNameChange) {
            onNameChange(newName, index);
        }
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <BackButton onPress={handleGoBack} />
            <View style={styles.content}>
                <TouchableOpacity style={styles.photoBox}>
                    <Text style={styles.label}>Agregar foto de portada</Text>
                    <View style={styles.cameraIconContainer}>
                        <Icon name="camera" size={35} color={colors.colorSix} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.label}>Cambiar Nombre del Viaje</Text>
                <TextInput style={styles.input} placeholder="Nuevo nombre del viaje"  value={newName} onChangeText={handleNameChange}/>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
                        <Text style={styles.buttonText}>Confirmar Cambios</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        alignItems: 'center',
    },
    content: {
        width: '95%',
    },
    label: {
        fontSize: 28,
        marginBottom: 10,
        color: colors.colorFive,
        textAlign: 'center',
        fontFamily: 'amaticBold',
        letterSpacing: 1,
    },
    input: {
        height: 40,
        borderColor: colors.colorFour,
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 20,
        padding: 10,
        color: colors.colorFive,
        textAlign: 'center',
        fontSize: 20,
    },
    photoBox: {
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    cameraIconContainer: {
        backgroundColor: colors.colorFour,
        color: colors.colorSix,
        borderRadius: 40,
        padding: 15,
        marginTop: 7,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        height: 45,
        width: 150,
        marginTop: 15,
        backgroundColor: colors.colorOne,
        padding: 7,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'amaticBold',
        letterSpacing: 1.5,
        color: colors.colorFive,
    },
});

export default EditTravelInfoScreen;
