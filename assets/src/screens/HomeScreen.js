import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    
    <View style={styles.container}>

        
      <Text style={styles.title}>Bienvenido</Text>

      {/* Botón para navegar a la Lista de Tareas */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TaskList')}
      >
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      {/* Botón para navegar a la pantalla de Crear Tarea */}
    
        <Text style={styles.Text}>¿No tienes cuenta?  Registrate aqui</Text>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#333',
  },
  button: {
    backgroundColor: '#87CEFA', // Azul cielo
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
