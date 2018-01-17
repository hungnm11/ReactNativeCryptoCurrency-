import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { images } from '../../assets/CoinIcons';

const CoinCard = ({ symbol, coin_name }) => {
  
  return (
    <View>
      <Image 
        style={styles.image}
        source={{ uri: images[symbol]}} 
      />
      <Text>{symbol}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40
  }
});

export default CoinCard;