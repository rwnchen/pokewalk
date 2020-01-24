import React, { useEffect } from 'react';
import { Pedometer } from 'expo-sensors';
import { StyleSheet, Text, View } from 'react-native';

import Store from './store';

const StepCount = (props) => {
  const store = Store.useStore();
  let subscription;

  const subscribe = () => {
    subscription = Pedometer.watchStepCount((result) => {
      console.log('stepping', result.steps);
      store.set('steps')(result.steps);
    });

    Pedometer.isAvailableAsync().then(
      (result) => {
        console.log('Pedometer available');
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

    return () => unsubscribe();
  }, []);

  return (
    <View>
      <Text>Undux Steps: {store.get('steps')}</Text>
    </View>
  );
};

export default Store.withStore(StepCount);
