import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import axios from 'axios';
import Separator from './Separator';
import Button from './Button';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DayDetailsEditModal = ({ visible, onClose, dayId, oldMeal }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    axios.get('/api/meals') // Ajusta la URL según tu endpoint
      .then(response => setMeals(response.data))
      .catch(error => console.error("Error fetching meals: ", error));
  }, []);

  const handleMealSelect = (meal) => {
    setSelectedMeal(meal);
  };

  const handleReplaceMeal = () => {
    if (selectedMeal) {
      axios.put(`/api/days/${dayId}/replaceMeal`, {
        oldMeal,
        newMeal: selectedMeal,
      })
        .then(() => {
          onClose(); // Cierra el modal tras reemplazar
        })
        .catch(error => console.error("Error replacing meal: ", error));
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <BlurView intensity={80} tint="dark" style={styles.blurContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.headerText}>Select Meal to Replace</Text>

            <FlatList
              data={meals}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.itemContainer,
                    selectedMeal && selectedMeal.id === item.id && styles.selectedItem
                  ]}
                  onPress={() => handleMealSelect(item)}
                >
                  <Text style={styles.itemText}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <Separator />}
            />

            {selectedMeal && (
              <Button text="Replace Meal" onPress={handleReplaceMeal} />
            )}

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
  itemContainer: {
    paddingVertical: 10,
  },
  selectedItem: {
    backgroundColor: '#d3d3d3',
  },
  itemText: {
    fontSize: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default DayDetailsEditModal;

