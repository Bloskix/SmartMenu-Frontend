import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import EditButton from './EditButton';
import CookBookEditModal from './CookBookEditModal';
import DayDetailsEditModal from './DayDetailsEditModal';
import Separator from './Separator';

const MealCard = ({ title = "Título", subtitle = "Subtítulo", screen, dayId, oldMeal }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const data = ["Opción 1", "Opción 2", "Opción 3"]; 
  
  const renderModal = () => {
    if (screen === 'CookBook') {
      return (
        <CookBookEditModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          data={data}
        />
      );
    } else {
      return (
        <DayDetailsEditModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          dayId={dayId}
          oldMeal={oldMeal}
        />
      );
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
      <Separator />
      <FlatList
        data={["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit"]}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
      <Separator />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Lorem ipsum dolor sit amet</Text>
        <EditButton onPress={() => setModalVisible(true)} />
      </View>

      {modalVisible && renderModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 580,
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
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
});

export default MealCard;