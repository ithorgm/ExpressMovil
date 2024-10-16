import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox, Alert } from 'react-native';
import { auth } from '../config/firebaseConfig'; // Asegúrate de la ruta correcta
import { signInWithEmailAndPassword } from 'firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa FontAwesome para los íconos

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Inicio de sesión exitoso:', userCredential.user);
      // Aquí puedes navegar a la pantalla principal
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      Alert.alert('Error', 'Las credenciales son incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={rememberMe}
          onValueChange={setRememberMe}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Recordarme</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={[styles.forgotPassword, { fontWeight: 'bold' }]}>Olvidé mi contraseña</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>o</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.socialButtonContent}>
            <Icon name="google" size={20} color="#DB4437" />
            <Text style={styles.socialButtonText}> Iniciar sesión con Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.socialButtonContent}>
            <Icon name="facebook" size={20} color="#4267B2" />
            <Text style={styles.socialButtonText}> Iniciar sesión con Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#87CEFA',
    paddingVertical: 15,
    borderRadius: 25,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 10,
    color: '#007BFF',
  },
  orText: {
    marginVertical: 20,
    fontSize: 16,
    color: '#333',
  },
  socialButtonsContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  socialButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 5,
    alignItems: 'center',
  },
  socialButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialButtonText: {
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 5,
  },
});

export default LoginScreen;
