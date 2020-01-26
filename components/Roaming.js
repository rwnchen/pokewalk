import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import * as assets from '../assets';
import Store from './store';

import { PixelText } from './PixelText';
import { Box } from './util';

const UnconnectedRoaming = () => {
  const store = Store.useStore();
  return (
    <View style={styles.container}>
      <Box>
        <PixelText>Steps: {store.get('steps')}</PixelText>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Roaming = Store.withStore(UnconnectedRoaming);
export { Roaming };
