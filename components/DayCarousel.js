import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import DayCard from './DayCard';

const DayCarousel = ({ days, setDays }) => {
  const handleDeleteDay = (index) => {
    setDays(days.filter((_, i) => i !== index));
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carousel}>
      {days.map((day, index) => (
        <View key={day.id} style={styles.cardContainer}>
          <DayCard
            day={day}
            title={`Title ${day.id}`}
            subtitle={`Subtitle ${day.id}`}
            prep={`${day.id * 5}m`}
            onDelete={() => handleDeleteDay(index)}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carousel: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  cardContainer: {
    marginHorizontal: 8,
  },
});

export default DayCarousel;


