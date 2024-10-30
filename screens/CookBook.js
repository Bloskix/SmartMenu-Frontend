import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealOptionsButton from '../components/MealOptionsButton';
import MealCard from '../components/MealCard';
import BottomNavigation from '../components/BottomNavigation';
import AddButton from '../components/AddButton';
import apiClient from '../api/apiClient';
import Button from '../components/Button';

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
          ? `/meals/type/${selectedType}`
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
      <Button title="Delete Filter" onPress={() => setSelectedType(null)} />

      
      <View style={styles.centeredAddButton}>
        <AddButton 
          size={50}
          onPress={() => navigation.navigate('AddMeal')} 
        />
      </View>

      <FlatList
        data={filteredMeals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MealCard
            mealId={item.id}
            mealName={item.name}
            mealType={item.type}
            mealIngredients={item.ingredients}
            mealPrepTime={item.prepTime}
            screen="CookBook"        
            oldMeal={null}
          />
        )}
        ListEmptyComponent={<Text style={styles.noMealsText}>No hay comidas disponibles</Text>}
        contentContainerStyle={styles.scrollView}
      />

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
  centeredAddButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
});

export default CookBook;