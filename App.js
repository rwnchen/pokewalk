import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StepCount from './components/StepCount.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StepCount></StepCount>
    </View>
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
