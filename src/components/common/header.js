import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  console.log(props)
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
}

export default Header;