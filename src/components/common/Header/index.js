import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  console.log(props)
  return (
    <View>
      <Text>{props.headerText}</Text>
    </View>
  );
}

export default Header;