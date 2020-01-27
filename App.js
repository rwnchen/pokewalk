import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, Image } from 'react-native';

import Store from './components/store';
import { Controller } from './Controller';

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
  return <Image source={props.img} style={styles.tileBG} />;
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
  tileBG: {
    position: 'absolute',
    top: -12,
    width: '120%',
    height: '120%',
    resizeMode: 'repeat',
  },
});
