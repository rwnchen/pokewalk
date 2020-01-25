import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as assets from './assets';

import Store from './components/store';
import { Controller } from './components/index';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'pixel-font': require('./assets/fonts/Pokemon-Pixel-Font.ttf'),
      });

      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  return (
    <Store.Container>
      {fontsLoaded ? (
        <View style={styles.container}>
          <TileBG img={assets.GROUND} />
          <TileBG img={assets.GRASS} />

          <Controller />
        </View>
      ) : (
        <Loading />
      )}
    </Store.Container>
  );
}

const Loading = () => {
  return <Text>Loading...</Text>;
};

const TileBG = (props) => {
  return <Image source={props.img} style={styles.tileBG}></Image>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  tileBG: {
    position: 'absolute',
    top: -12,
    width: '120%',
    height: '120%',
    resizeMode: 'repeat',
  },
});
