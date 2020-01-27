import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Store, { gameStates } from './store';
import * as assets from '../assets';

import { Box, BattleTextBox, PixelText } from './util';

const UnconnectedEncounter = () => {
  const store = Store.useStore();
  const pkmn = store.get('enemy');
  const [bgHeight, resizeBgHeight] = useState(0);

  const resizeOnLayout = (event) => {
    const width = event.nativeEvent.layout.width;
    resizeBgHeight(width);
  };

  return (
    <View style={styles.container}>
      <Box battle>
        <Image
          onLayout={(event) => {
            resizeOnLayout(event);
          }}
          source={assets.BATTLE_BG}
          style={{ width: '100%', height: bgHeight, resizeMode: 'contain' }}
        />
        <View style={{ ...styles.spriteLayer, height: bgHeight }}>
          <Image
            style={styles.enemy}
            source={
              pkmn.isShiny ? { uri: pkmn.shinySprite } : { uri: pkmn.sprite }
            }
          />
          <Image source={assets.TRAINER_BACK} style={styles.trainer}></Image>
        </View>

        <BattleTextBox>
          <PixelText battle>
            A wild{' '}
            <Text style={{ textTransform: 'uppercase' }}>{pkmn.name}</Text>{' '}
            appeared!
          </PixelText>
          <Button
            title='End Encounter'
            onPress={() => {
              store.set('gameState')(gameStates.ROAMING);
              store.set('enemy')({});
            }}
          />
        </BattleTextBox>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '90%',
    height: '80%',
  },
  spriteLayer: {
    position: 'absolute',
    width: '100%',
  },
  enemy: {
    position: 'absolute',
    bottom: '25%',
    right: '10%',
    width: 130,
    height: 130,
  },
  trainer: {
    position: 'absolute',
    bottom: 0,
    left: '5%',
    width: 140,
    height: 140,
  },
});

const Encounter = Store.withStore(UnconnectedEncounter);

export { Encounter };
