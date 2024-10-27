import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealCard from './MealCard';

const meals = [
  { id: '1', title: 'Meal 1' },
  { id: '2', title: 'Meal 2' },
  { id: '3', title: 'Meal 3' },
  { id: '4', title: 'Meal 4' },
];

const MealCarousel = () => {
  return (
    <View style={styles.carousel}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealCard title={item.title} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MealCarousel;

const styles = StyleSheet.create({
  carousel: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});

