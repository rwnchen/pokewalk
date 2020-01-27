import React, { useEffect } from 'react';
import { Pedometer } from 'expo-sensors';
import { AsyncStorage, Button, Image, View, StyleSheet } from 'react-native';
import Store, { gameStates } from './components/store';

import { CaughtScreen, Encounter, Roaming, Pokedex } from './components';
import * as assets from './assets';
const DEBUG = false;

const UnconnectedController = (props) => {
  const store = Store.useStore();

  let subscription;

  const subscribe = async () => {
    await Pedometer.isAvailableAsync().then(
      (result) => {
        subscription = Pedometer.watchStepCount((result) => {
          store.set('steps')(result.steps - 1);
        });
      },
      (error) => {
        console.log('Pedometer unavailable: ' + error);
      }
    );
  };

  const fetchOrCreateData = async () => {
    try {
      const value = await AsyncStorage.getItem('pokemon');
      if (value !== null) {
        store.set('trainerPokemon')(JSON.parse(value));
      } else {
        await AsyncStorage.setItem('pokemon', '[]');
      }
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    subscription = null;
    store.set('steps')(0);
  };

  useEffect(() => {
    subscribe();
    fetchOrCreateData();

    return () => unsubscribe;
  }, []);

  const renderState = () => {
    switch (store.get('gameState')) {
      case gameStates.ENCOUNTER:
        return <Encounter />;
      case gameStates.POKEDEX:
        return <Pokedex />;
      case gameStates.CAUGHT:
        return <CaughtScreen />;
      default:
        return <Roaming />;
    }
  };

  return (
    <View style={styles.container}>
      <TileBG img={assets.GROUND} />
      <TileBG img={assets.GRASS} />
      {renderState()}

      {DEBUG ? (
        <Button
          title={'Clear state'}
          onPress={async () => {
            await AsyncStorage.setItem('pokemon', '[]');
            store.set('trainerPokemon')([]);
          }}
        />
      ) : (
        <View />
      )}
    </View>
  );
};

const TileBG = (props) => {
  return <Image source={props.img} style={styles.tileBG} />;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileBG: {
    position: 'absolute',
    top: -12,
    width: '120%',
    height: '120%',
    resizeMode: 'repeat',
  },
});

const Controller = Store.withStore(UnconnectedController);

export { Controller };
