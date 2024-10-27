import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import DayDetails from '../screens/DayDetails';
import CookBook from '../screens/CookBook';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      setIsAuthenticated(!!token);
    };
    checkToken();
  }, []);

  const handleLogin = async (token) => {
    await AsyncStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Home">
            {(props) => <Home {...props} logout={handleLogout} />}
          </Stack.Screen>
          <Stack.Screen name="DayDetails" component={DayDetails} />
          <Stack.Screen name="CookBook" component={CookBook} />
          <Stack.Screen name="Profile" component={Profile} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login">
            {(props) => <Login {...props} onLogin={handleLogin} />}
          </Stack.Screen>
          <Stack.Screen name="Register">
            {(props) => <Register {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        </>
      )}
    </Stack.Navigator>
  );
};

export default Routes;

