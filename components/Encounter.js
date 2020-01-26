import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Store, { gameStates } from './store';
import * as assets from '../assets';

import { PixelText } from './PixelText';
import { Box, BattleBox } from './util';

const UnconnectedEncounter = () => {
  const store = Store.useStore();
  const pkmn = store.get('enemy');

  return (
    <View style={styles.container}>
      <Box battle>
        <Image source={assets.BATTLE_BG} style={{ width: '100%' }}></Image>
        {/* <Image
          style={{ width: 100, height: 100 }}
          source={
            pkmn.isShiny ? { uri: pkmn.shinySprite } : { uri: pkmn.sprite }
          }
        />
        <Image source={assets.TRAINER_BACK}></Image>
        <PixelText>
          A wild <Text style={{ textTransform: 'uppercase' }}>{pkmn.name}</Text>{' '}
          appeared!
        </PixelText>
        <Button
          title='End Encounter'
          onPress={() => {
            store.set('gameState')(gameStates.ROAMING);
            store.set('enemy')({});
          }}
        /> */}
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '80%',
  },
});

const Encounter = Store.withStore(UnconnectedEncounter);

export { Encounter };
