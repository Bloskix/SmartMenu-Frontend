import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomNavigation from '../components/BottomNavigation';

const CookBook = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hola desde CookBook</Text>
    <BottomNavigation />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CookBook;
