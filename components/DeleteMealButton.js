import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import apiClient from '../api/apiClient';

const DeleteMealButton = ({ mealId, onDeleteSuccess }) => {
  const handleDelete = async () => {
    Alert.alert(
      "Delete Meal",
      "Are you sure you want to delete this meal?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await apiClient.delete(`/meals/${mealId}`);
              Alert.alert("Meal deleted successfully");
              if (onDeleteSuccess) onDeleteSuccess();
            } catch (error) {
              Alert.alert("Failed to delete meal", error.message);
            }
          },
        },
      ]
    );
  };

  return (
    <TouchableOpacity onPress={handleDelete} style={styles.deleteButtonContainer}>
      <Text style={styles.deleteButtonText}>Delete Meal</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deleteButtonContainer: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DeleteMealButton;
