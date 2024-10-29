import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddButton from '../components/AddButton';
import DayCard from '../components/DayCard';
import BottomNavigation from '../components/BottomNavigation';

const Home = ({ logout }) => {
  const [days, setDays] = useState([]);

  const handleAddDay = () => {
    setDays([...days, { id: days.length + 1 }]);
  };

  const handleDeleteDay = (id) => {
    setDays(days.filter((day) => day.id !== id));
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
                title={`Title ${day.id}`}
                subtitle={`Subtitle ${day.id}`}
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
    paddingHorizontal: 20,
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