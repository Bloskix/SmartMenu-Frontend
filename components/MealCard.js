import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealCard = ({ title }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MealCard;
