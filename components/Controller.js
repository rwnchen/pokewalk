import React, { useEffect } from 'react';
import { Pedometer } from 'expo-sensors';
import { View, StyleSheet } from 'react-native';
import Store, { gameStates } from './store';

import { Encounter } from './Encounter';
import { TextBox } from './PixelText';

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

  const renderEncounter = () => {
    if (store.get('gameState') === gameStates.ENCOUNTER) {
      return <Encounter />;
    }
  };

  return (
    <View style={styles.container}>
      <TextBox>Steps: {store.get('steps')}</TextBox>
      {renderEncounter()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Controller = Store.withStore(UnconnectedController);

export { Controller };
