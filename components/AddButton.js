import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddButton = ({ onPress, size = 40 }) => {
  return (
    <TouchableOpacity style={[styles.button, { width: size, height: size }]} onPress={onPress}>
      <Ionicons name="add" size={size / 2} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',  // Color verde
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default AddButton;