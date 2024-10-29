// src/api/apiClient.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Crear una instancia de Axios
const apiClient = axios.create({
  baseURL: 'http://192.168.18.33:8080', // Cambia esto a tu URL base
});

// Configurar el interceptor para agregar el token a cada petición
apiClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
