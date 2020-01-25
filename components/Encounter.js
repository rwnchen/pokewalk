import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import Store, { gameStates } from './store';

import { PixelText } from './PixelText';

const UnconnectedEncounter = () => {
  const store = Store.useStore();
  const pkmn = store.get('enemy');

  return (
    <View>
      <PixelText>Encounter with: {pkmn.name}</PixelText>
      <Image
        style={{ width: 100, height: 100 }}
        source={pkmn.isShiny ? { uri: pkmn.shinySprite } : { uri: pkmn.sprite }}
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
