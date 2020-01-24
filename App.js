import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Store from './components/store';
import StepCount from './components/StepCount';

export default function App() {
  return (
    <Store.Container>
      <View style={styles.container}>
        <Text>Hello</Text>
        <StepCount></StepCount>
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
