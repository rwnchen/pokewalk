import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import Store, { gameStates } from './store';

const UnconnectedEncounter = () => {
  const store = Store.useStore();
  return (
    <View>
      <Text>Encounter with: {store.get('enemy').name}</Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: store.get('enemy').sprites }}
      />
      <Button
        title='End Encounter'
        onPress={() => {
          store.set('gameState')(gameStates.ROAMING);
          store.set('enemy')({});
        }}
      />
    </View>
  );
};

const Encounter = Store.withStore(UnconnectedEncounter);

export { Encounter };
