import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import MealOptionsButton from '../components/MealOptionsButton';
import MealCarousel from '../components/MealCaruosel'; 
import BottomNavigation from '../components/BottomNavigation'; 

const CookBook = () => {
  const [selectedType, setSelectedType] = useState('MEAL');
  const [filteredMeals, setFilteredMeals] = useState([]);

  // Función para manejar la selección de tipo
  const handleSelect = (type) => {
    setSelectedType(type);
  };

  // Filtrado de comidas desde el backend en base al tipo seleccionado
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(`https://tu-api.com/meals?type=${selectedType}`);
        setFilteredMeals(response.data);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };
    fetchMeals();
  }, [selectedType]);

  return (
    <View style={styles.container}>
      <MealOptionsButton selectedType={selectedType} onSelect={handleSelect} />
      <MealCarousel meals={filteredMeals} />
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e7eb',
    paddingTop: 32,
  },
});

export default CookBook;

