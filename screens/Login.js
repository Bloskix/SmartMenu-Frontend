import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import useInput from '../hooks/useInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Login = ({ navigation, onLogin }) => {
  const username = useInput('');
  const password = useInput('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.18.33:8080/auth/login', {
        username: username.value, 
        password: password.value,
      });
      
      const token = response.data.token; 
      await AsyncStorage.setItem('userToken', token);
      onLogin(token); 
    } catch (error) {
      console.error('Error al registrarse:', error);
      // Aquí podrías mostrar un mensaje de error en la UI
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <Input placeholder="Username" value={username.value} onChangeText={username.onChangeText} />
      <Input placeholder="Password" value={password.value} onChangeText={password.onChangeText} secureTextEntry />
      <Button title="Sign in" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>Don't have an account? Register</Text>
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

export default Login;
