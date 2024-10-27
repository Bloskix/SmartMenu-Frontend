import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import CarouselCard from './DayCard';

const DayCarousel = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carousel}>
      {[1, 2, 3, 4, 5, 6, 7].map(day => (
        <View key={day} style={styles.cardContainer}>
          <CarouselCard day={day} />
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
