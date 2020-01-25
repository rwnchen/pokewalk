import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as assets from './assets';

import Store from './components/store';
import { Controller } from './components/index';

export default function App() {
  return (
    <Store.Container>
      <View style={styles.container}>
        <Background img={assets.GROUND} />
        <Background img={assets.GRASS} />

        <Controller />
      </View>
    </Store.Container>
  );
}

const Background = (props) => {
  return <Image source={props.img} style={styles.tileBG}></Image>;
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileBG: {
    position: 'absolute',
    top: 12,
    left: 12,
    width: '120%',
    height: '120%',
    resizeMode: 'repeat',
    transform: [{ scale: 2 }],
  },
});
