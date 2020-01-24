import React, { useEffect } from 'react';
import { Pedometer } from 'expo-sensors';
import { Text, View } from 'react-native';

import Store, { gameStates } from './store';

const UnconnectedStepCount = (props) => {
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

  return (
    <View>
      <Text>Undux Steps: {store.get('steps')}</Text>
    </View>
  );
};

const StepCount = Store.withStore(UnconnectedStepCount);
export { StepCount };
