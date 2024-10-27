import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealCarousel from '../components/MealCaruosel';
import BottomNavigation from '../components/BottomNavigation';
import { Ionicons } from '@expo/vector-icons';

const DayDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.logoText}>SmartMenu</Text>
      </View>

      <View style={styles.carouselContainer}>
        <MealCarousel />
      </View>

      <BottomNavigation />
    </View>
  );
};

export default DayDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e7eb',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

