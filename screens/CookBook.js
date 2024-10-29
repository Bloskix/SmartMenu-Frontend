import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MealOptionsButton from '../components/MealOptionsButton';
import MealCard from '../components/MealCard';
import BottomNavigation from '../components/BottomNavigation';
import AddButton from '../components/AddButton';
import apiClient from '../api/apiClient';

const CookBook = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [filteredMeals, setFilteredMeals] = useState([]);

  const handleSelect = (type) => {
    setSelectedType(type);
  };

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const endpoint = selectedType 
          ? `/meals?type=${selectedType}` 
          : '/meals';
        const response = await apiClient.get(endpoint);
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
      
      <AddButton 
        style={styles.addButton} 
        onPress={() => navigation.navigate('AddMeal')} 
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        {filteredMeals.length > 0 ? (
          filteredMeals.map(meal => (
            <MealCard
              key={meal.id}
              mealName={meal.name}
              mealType={meal.type}
              mealIngredients={meal.ingredients}
              mealPrepTime={meal.prepTime}
              screen="CookBook"  // Agrega el prop "screen" para que el modal se configure adecuadamente
              dayId={null}       // dayId y oldMeal son opcionales en CookBook, así que puedes enviarlos como null
              oldMeal={null}
            />
          ))
        ) : (
          <Text style={styles.noMealsText}>No hay comidas disponibles</Text>
        )}
      </ScrollView>

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
  scrollView: {
    paddingHorizontal: 16,
    paddingBottom: 100, // Espacio adicional para evitar que el contenido quede detrás del BottomNavigation
  },
  noMealsText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 18,
    color: '#333',
  },
  addButton: {
    position: 'absolute',
    bottom: 80, // Ajuste para que esté sobre BottomNavigation
    right: 20, // Coloca el botón en la esquina derecha
    zIndex: 10, // Asegura que esté sobre BottomNavigation
    backgroundColor: '#FF6347', // Color de fondo del botón, puedes cambiarlo si es necesario
    padding: 10,
    borderRadius: 30, // Haz el botón circular
    elevation: 5, // Añade sombra para visibilidad
  },
});

export default CookBook;