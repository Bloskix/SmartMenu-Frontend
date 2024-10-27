import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomNavigation = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState("Home");

  const handlePress = (screen) => {
    setSelectedButton(screen);
    navigation.navigate(screen);
  };

  // Actualiza selectedButton cada vez que la pantalla cambia
  useFocusEffect(
    useCallback(() => {
      setSelectedButton(navigation.getState().routes[navigation.getState().index].name);
    }, [navigation])
  );

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => handlePress("CookBook")}>
        <Ionicons
          name="book-outline"
          size={24}
          style={[styles.icon, selectedButton === "CookBook" && styles.selectedIcon]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("Home")}>
        <Ionicons
          name="home-outline"
          size={24}
          style={[styles.icon, selectedButton === "Home" && styles.selectedIcon]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("Profile")}>
        <Ionicons
          name="person-outline"
          size={24}
          style={[styles.icon, selectedButton === "Profile" && styles.selectedIcon]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 20,
    backgroundColor: '#e0e5ec',
    bottom: 0,
    position: 'absolute'
  },
  icon: {
    color: '#888',
    padding: 10,
  },
  selectedIcon: {
    color: '#333',
    shadowColor: '#a3b1c6',
    shadowOffset: { width: -4, height: -4 },
    shadowOpacity: 1,
    shadowRadius: 6,
    backgroundColor: '#e0e5ec',
    borderRadius: 50,
    elevation: 6,
  },
});
