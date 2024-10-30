import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import EditButton from './EditButton';
import CookBookEditModal from './CookBookEditModal';
import DayDetailsEditModal from './DayDetailsEditModal';
import Separator from './Separator';

const MealCard = ({ mealName, mealType, mealIngredients, mealPrepTime, screen, dayId, oldMeal }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderModal = () => {
    if (screen === 'CookBook') {
      return (
        <CookBookEditModal 
        visible={modalVisible}
        onClose={() => setModalVisible(false) }
        data={data}
        />
      );
    } else {
      return (
        <DayDetailsEditModal 
        visible={modalVisible}
        onClose={ () => setModalVisible(false) }
        dayId={dayId}
        oldMeal={oldMeal}
        />
      );
    };
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.cardTitle}>{mealName}</Text>
        <Text style={styles.cardSubtitle}>{mealType}</Text>
      </View>

      <Separator />

      <Text style={styles.ingredientsTitle}>Ingredients</Text>
      <FlatList 
        data={mealIngredients}
        renderItem={({ item }) => (
          <View style={styles.ingredientRow}>
            <Text style={styles.ingredientName}>{item.name}</Text>
            <Text style={styles.ingredientQuantity}>{item.quantity} grs</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />

      <Separator />

      <View style={styles.footer}>
        <Text style={styles.footerText}>{mealPrepTime} mins</Text>
        <EditButton onPress={ () => setModalVisible(true) } />
      </View>

      {modalVisible && renderModal()}
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 500,
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  ingredientsTitle: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    flexGrow: 1,
    marginVertical: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#555',
  },
  ingredientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  ingredientName: {
    fontSize: 16,
    color: '#333',
  },
  ingredientQuantity: {
    fontSize: 16,
    color: '#333',
  },
});
export default MealCard;