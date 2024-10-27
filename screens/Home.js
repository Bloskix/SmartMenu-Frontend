import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DayCarousel from '../components/DayCarousel';
import BottomNavigation from '../components/BottomNavigation';
import { FontAwesome } from '@expo/vector-icons';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="bars" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.logo}>SmartMenu</Text>
      </View>
      <DayCarousel />
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E5EC',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#E0E5EC',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Home;



