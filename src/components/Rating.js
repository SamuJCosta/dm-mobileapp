import React from 'react';
import { View, Text } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';

const Rating = ({ rating, styleRating, numerAvaliations }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon
          key={i} // Unique key for each StarIcon
          name={i <= rating ? 'star' : 'star-solid'}
          size={20}
          color={i <= rating ? 'gold' : 'grey'}
        />
      );
    }
    return stars;
  };

  return (
    <View style={styleRating}>
      <Text style={{ marginRight: 5 }}>{rating}</Text>
      {renderStars()}
      <Text style={{ color:"#868889", fontSize:14, fontWeight:"500"}}>({numerAvaliations} Avaliações)</Text>
    </View>
  );
};

export default Rating;
