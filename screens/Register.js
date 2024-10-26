import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import useInput from '../hooks/useInput';

const Register = ({ navigation, onLogin }) => {
  const firstname = useInput('');
  const username = useInput('');
  const password = useInput('');

  const handleRegister = async () => {
    // Simulación de registro: reemplaza esto con tu llamada a la API
    const token = 'fake-jwt-token'; // Aquí deberías obtener el token real de la API al registrarse
    onLogin(token);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Register</Text>
      <Input placeholder="Firstname" value={firstname.value} onChangeText={firstname.onChangeText} />
      <Input placeholder="Username" value={username.value} onChangeText={username.onChangeText} />
      <Input placeholder="Password" value={password.value} onChangeText={password.onChangeText} secureTextEntry />
      <Button title="Sign up" onPress={handleRegister} />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  linkText: {
    textAlign: 'center',
    color: '#007AFF',
    marginTop: 15,
  },
});

export default Register;
