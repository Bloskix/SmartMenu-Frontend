import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DeleteDayButton from './DeleteDayButton';
import Separator from './Separator';

const DayCard = ({ day, onDelete }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('DayDetails', { day });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <DeleteDayButton onDelete={onDelete} />
    
      <Text style={styles.title}>Day {day.dayNumber}</Text>

      {day.meals.slice(0, 4).map((meal, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.title}>{meal.name}</Text>
          <Text style={styles.subtitle}>{meal.type}</Text>
          <Text style={styles.prep}>{meal.prepTime}m</Text>
      </View>
      ))}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 620,
    backgroundColor: '#F0F0F3',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    position: 'relative',
    alignItems: 'center',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#999',
  },
  prep: {
    fontSize: 14,
    color: '#333',
  },
});

export default DayCard;