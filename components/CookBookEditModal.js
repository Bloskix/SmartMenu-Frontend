import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Modal, TouchableOpacity, Alert } from 'react-native';
import { BlurView } from 'expo-blur';
import AddButton from './AddButton';
import Button from './Button';
import DeleteMealButton from './DeleteMealButton';
import apiClient from '../api/apiClient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CookBookEditModal = ({ visible, onClose, mealId }) => {
  const [mealName, setMealName] = useState('');
  const [mealType, setMealType] = useState(null);
  const [prepTime, setPrepTime] = useState('');
  const [ingredients, setIngredients] = useState([]); 

  const handleIngredientChange = (index, key, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][key] = value;
    setIngredients(updatedIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '' }]);
  };

  const removeIngredient = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  const handleUpdate = async () => {
    try {
      const mealData = {
        name: mealName,
        type: mealType,
        prepTime: prepTime,
        ingredients: ingredients.map((ingredient) => ({
          name: ingredient.name,
          quantity: ingredient.quantity,
        })),
      };

      const response = await apiClient.put(`/meals/${mealId}`, mealData);
      Alert.alert("Meal updated successfully");
      onClose(); 
    } catch (error) {
      Alert.alert("Failed to update meal", error.message);
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <BlurView intensity={80} tint="dark" style={styles.blurContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.headerText}>Edit Meal</Text>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <TextInput 
                placeholder="Change meal name" 
                style={styles.input}
                value={mealName}
                onChangeText={setMealName} 
              />
              <TextInput 
                placeholder="Change type" 
                style={styles.input}
                value={mealType}
                onChangeText={setMealType} 
              />
              <TextInput 
                placeholder="Change prep time" 
                style={styles.input} 
                keyboardType="numeric"
                value={prepTime}
                onChangeText={setPrepTime} 
              />

              {ingredients.map((ingredient, index) => (
                <View key={index} style={styles.ingredientRow}>
                  <TextInput
                    placeholder="Ingredient name"
                    style={styles.ingredientInput}
                    value={ingredient.name}
                    onChangeText={(text) => handleIngredientChange(index, 'name', text)}
                  />
                  <TextInput
                    placeholder="Qty"
                    style={styles.quantityInput}
                    keyboardType="numeric"
                    value={ingredient.quantity}
                    onChangeText={(text) => handleIngredientChange(index, 'quantity', text)}
                  />

                  <TouchableOpacity onPress={() => removeIngredient(index)}>
                    <Ionicons name="remove-circle" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              ))}

              <AddButton onPress={addIngredient} />
            </ScrollView>

            <Button onPress={handleUpdate} title="Update" />

            <DeleteMealButton mealId={mealId} onDeleteSuccess={onClose} />

            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  blurContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    height: 500,
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 5,
  },
  ingredientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ingredientInput: {
    flex: 2,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 5,
  },
  quantityInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default CookBookEditModal;