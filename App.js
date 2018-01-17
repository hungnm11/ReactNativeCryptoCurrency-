import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/common/header';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header 
          headerText="Header 123"
        />
        <Text>Open up App.js to start working on your 123!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
