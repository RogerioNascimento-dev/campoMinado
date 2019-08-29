import React from 'react';
import {View, Text, StatusBar, StyleSheet } from 'react-native';
import params from './src/params'
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.welcome}>Tamanho da grade</Text>
        <Text style={styles.welcome}>{params.getRowsAmount()}X{params.getCollunsAmount()}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center'
  },
});

export default App;
