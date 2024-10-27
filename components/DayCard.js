import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DayCard = ({ day }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('DayDetails', { day });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Text style={styles.text}>Day {day}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,  
    height: 620, 
    backgroundColor: '#F0F0F3',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default DayCard;
