import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import Store, { gameStates } from './store';

import { StepCount } from './StepCount';
import { Encounter } from './Encounter';

const UnconnectedController = (props) => {
  const store = Store.useStore();

  const renderEncounter = () => {
    if (store.get('gameState') === gameStates.ENCOUNTER) {
      return <Encounter />;
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
