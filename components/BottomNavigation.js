import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const BottomNavigation = () => {
  const [selectedButton, setSelectedButton] = useState("home");

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => setSelectedButton("book")}>
        <FontAwesome5
          name="book"
          size={24}
          style={[styles.icon, selectedButton === "book" && styles.selectedIcon]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedButton("home")}>
        <FontAwesome5
          name="home"
          size={24}
          style={[styles.icon, selectedButton === "home" && styles.selectedIcon]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedButton("list")}>
        <FontAwesome5
          name="list"
          size={24}
          style={[styles.icon, selectedButton === "list" && styles.selectedIcon]}
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
