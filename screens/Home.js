import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DayCarousel from '../components/DayCarousel';
import BottomNavigation from '../components/BottomNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({ logout }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={logout} style={styles.logoutButton}>
          <Ionicons name="exit-outline" size={24} color="red" />
        </TouchableOpacity>
        <Text style={styles.logo}>SmartMenu</Text>
      </View>
      <View style={styles.carouselContainer}>
        <DayCarousel />
      </View>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E5EC',
    justifyContent: 'flex-start', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20, 
    backgroundColor: '#E0E5EC',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Home;




