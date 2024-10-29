import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Separator from './Separator';
import DeleteButton from './DeleteButton';

const DayCard = ({ day, title, subtitle, prep, onDelete }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('DayDetails', { day });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <DeleteButton onDelete={onDelete} />
    
      {[1, 2, 3, 4].map((_, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.title}>Title {index + 1}</Text>
          <Text style={styles.subtitle}>Subtitle {index + 1}</Text>
          <Text style={styles.prep}>{index * 5}m</Text>
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