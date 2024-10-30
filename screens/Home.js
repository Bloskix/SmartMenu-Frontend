import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddButton from '../components/AddButton';
import DayCard from '../components/DayCard';
import BottomNavigation from '../components/BottomNavigation';
import apiClient from '../api/apiClient';

const Home = ({ logout }) => {
  const [days, setDays] = useState([]);

  const createDay = async (dayNumber) => {
    try {
      const response = await apiClient.post('/days', {
        dayNumber, 
        meals: [],
      });
      return Array.isArray(response.data) ? response.data : response.data;
    } catch (error) {
      console.error("Error creating day:", error);
      alert("Could not create the day");
      return null;
    }
  };

  const handleAddDay = async () => {
    const newDayNumber = days.length + 1;
    const newDay = await createDay(newDayNumber);
    if (newDay) {
      setDays((prevDays) => [...prevDays, newDay]); // Añadir sin sobrescribir
    }
  };

  const handleDeleteDay = async (id) => {
    try {
      const response = await apiClient.delete(`/days/${id}`);
      if (response.status === 200) {
        const updatedDays = days.filter((day) => day.id !== id);
        const reorderedDays = updatedDays.map((day, index) => ({
          ...day,
          dayNumber: index + 1,
        }));
        setDays(reorderedDays);
        alert("Day deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting day:", error);
      alert("Could not delete the day");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={logout} style={styles.logoutButton}>
          <Ionicons name="exit-outline" size={24} color="red" />
        </TouchableOpacity>
        <Text style={styles.logo}>SmartMenu</Text>
      </View>

      {days.length === 0 ? (
        <View style={styles.centeredAddButton}>
          <AddButton onPress={handleAddDay} size={60} />
        </View>
      ) : (
        <ScrollView horizontal contentContainerStyle={styles.cardContainer} showsHorizontalScrollIndicator={false}>
          {days.map((day) => (
            <View key={day.id} style={styles.cardWrapper}>
              <DayCard
                day={day}
                onDelete={() => handleDeleteDay(day.id)}
              />
            </View>
          ))}
          <View style={styles.cardWrapper}>
            <AddButton onPress={handleAddDay} size={60} />
          </View>
        </ScrollView>
      )}

      <BottomNavigation />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E5EC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#E0E5EC',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginTop: -50,
  },
  centeredAddButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  cardWrapper: {
    marginHorizontal: 10,
  },
});

export default Home;