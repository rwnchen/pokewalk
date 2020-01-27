import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import * as assets from '../assets';
import Store from './store';

import { Box, PixelText } from './util';

const UnconnectedRoaming = () => {
  const store = Store.useStore();
  return (
    <View style={styles.container}>
      <Box>
        <View style={styles.innerContainer}>
          <PixelText>Steps: {store.get('steps')}</PixelText>
          <PixelText>Take a walk to find wild Pokemon!</PixelText>
          <Image source={assets.TRAINER} />
        </View>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '60%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});

const Roaming = Store.withStore(UnconnectedRoaming);
export { Roaming };
