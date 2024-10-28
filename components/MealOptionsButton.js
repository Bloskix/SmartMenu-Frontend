import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MealOptionsButton = ({ selectedType, onSelect }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.option,
          selectedType === 'MEAL' ? styles.selected : styles.unselected,
        ]}
        onPress={() => onSelect('MEAL')}
      >
        <Text style={styles.optionText}>Meals</Text>
      </TouchableOpacity>
      
      <View style={styles.divider} />
      
      <TouchableOpacity
        style={[
          styles.option,
          selectedType === 'SNACK' ? styles.selected : styles.unselected,
        ]}
        onPress={() => onSelect('SNACK')}
      >
        <Text style={styles.optionText}>Snacks</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#e0e7eb',
    borderRadius: 16,
    padding: 4,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  option: {
    flex: 1,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  selected: {
    backgroundColor: '#f0f0f3',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  unselected: {
    backgroundColor: '#e0e0e3',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  divider: {
    width: 1,
    height: '70%',
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
});

export default MealOptionsButton;
