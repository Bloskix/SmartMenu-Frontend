import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DeleteButton = ({ onDelete }) => {
  const confirmDelete = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this day?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: onDelete }
      ]
    );
  };

  return (
    <TouchableOpacity onPress={confirmDelete} style={{ position: 'absolute', top: 10, right: 10 }}>
      <Ionicons name="remove-circle-outline" size={30} color="red" />
    </TouchableOpacity>
  );
};

export default DeleteButton;
