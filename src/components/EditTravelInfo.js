import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EditTravelInfo = ({ onNameChange, onPhotoChange, onDelete, onSaveChanges }) => {
    const [newName, setNewName] = useState('');

    const handleNameChange = (text) => {
        setNewName(text);
    };

    const handlePhotoChange = () => {
        // Agrega la lógica para seleccionar una foto aquí
        // Puedes usar bibliotecas como react-native-image-picker o react-native-camera
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <View style={styles.content}>
                <TouchableOpacity style={styles.photoBox} onPress={handlePhotoChange}>
                    <Text style={styles.label}>Agregar Foto del Viaje</Text>
                    <View style={styles.cameraIconContainer}>
                        <Icon name="camera" size={30} color="#4CAF50" />
                    </View>
                </TouchableOpacity>
                <Text style={styles.label}>Cambiar Nombre del Viaje</Text>
                <TextInput style={styles.input} placeholder="Nuevo nombre del viaje" value={newName} onChangeText={handleNameChange}/>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#FF5722' }]} onPress={onDelete}>
                        <Text style={styles.buttonText}>Eliminar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#2196F3' }]} onPress={() => onSaveChanges(newName)}>
                        <Text style={styles.buttonText}>Confirmar Cambios</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '95%',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333333',
    },
    input: {
        height: 40,
        borderColor: '#666666',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        padding: 10,
        color: '#333333',
    },
    photoBox: {
        borderWidth: 2,
        borderColor: '#666666',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#ECEFF1',
        marginBottom: 20,
    },
    cameraIconContainer: {
        backgroundColor: '#666666',
        borderRadius: 25,
        padding: 10,
        marginTop: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EditTravelInfo;
