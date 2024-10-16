import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>

      {/* Botón para navegar a la pantalla de Iniciar Sesión */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      {/* Texto y botón para navegar a la pantalla de Registro */}
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={[styles.text, { fontWeight: 'bold' }]}>
          ¿No tienes cuenta? Regístrate aquí
        </Text>
      </TouchableOpacity>
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
    backgroundColor: '#87CEFA',
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
  text: {
    marginTop: 20,
    fontSize: 16,
    color: '#1E90FF', // Cambia el color a azul
  },
});

export default HomeScreen;
