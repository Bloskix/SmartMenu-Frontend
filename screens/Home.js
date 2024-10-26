import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ logout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to SmartMenu!</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Home;

