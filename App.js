import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Store from './components/store';
import { Controller } from './components/index';

export default function App() {
  return (
    <Store.Container>
      <View style={styles.container}>
        <Controller></Controller>
      </View>
    </Store.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
