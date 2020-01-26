import React, { useEffect } from 'react';
import { Pedometer } from 'expo-sensors';
import { Image, View, StyleSheet } from 'react-native';
import Store, { gameStates } from './store';

import { Encounter } from './Encounter';
import { Roaming } from './Roaming';
import * as assets from '../assets';

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

  const unsubscribe = () => {
    subscription && subscription.remove();
    subscription = null;
    store.set('steps')(0);
  };

  useEffect(() => {
    subscribe();

    return () => unsubscribe;
  }, []);

  const renderState = () => {
    switch (store.get('gameState')) {
      case gameStates.ENCOUNTER:
        return <Encounter />;
      default:
        return <Roaming />;
    }
  };

  return (
    <View style={styles.container}>
      <TileBG img={assets.GROUND} />
      <TileBG img={assets.GRASS} />
      {renderState()}
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
