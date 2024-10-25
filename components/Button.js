import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.neumorphic}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
  },
  neumorphic: {
    backgroundColor: '#E0E5EC',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowOffset: { width: -6, height: -6 },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FFFFFF',
    elevation: 5,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Button;
