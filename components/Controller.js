import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import Store, { gameStates } from './store';

import { StepCount } from './StepCount';

const UnconnectedController = (props) => {
  const store = Store.useStore();

  const renderEncounter = () => {
    if (store.get('gameState') === gameStates.ENCOUNTER) {
      console.log(store.get('enemy'));
      return (
        <View>
          <Text>Encounter with: {store.get('enemy').name}</Text>
          <Image source={{ uri: store.get('enemy').sprites }} />
          <Button
            title='End Encounter'
            onPress={() => {
              store.set('gameState')(gameStates.ROAMING);
              store.set('enemy')({});
            }}
          />
        </View>
      );
    }
  };

  return (
    <View>
      <StepCount />
      {renderEncounter()}
    </View>
  );
};

const Controller = Store.withStore(UnconnectedController);

export { Controller };
