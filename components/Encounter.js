import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
        <SpriteLayer bgHeight={bgHeight} pkmn={pkmn} />

        <BattleDialogBox store={store} pkmn={pkmn} />
      </Box>
    </View>
  );
};

const SpriteLayer = (props) => {
  const { bgHeight, pkmn } = props;
  return (
    <View style={{ ...styles.spriteLayer, height: bgHeight }}>
      <Image style={styles.enemy} source={{ uri: pkmn.sprite }} />
      <Image source={assets.TRAINER_BACK} style={styles.trainer}></Image>
    </View>
  );
};

const BattleDialogBox = (props) => {
  const { store, pkmn } = props;

  const catchPkmn = () => {
    const currPokemon = store.get('trainerPokemon');
    store.set('trainerPokemon')([...currPokemon, pkmn]);
    store.set('gameState')(gameStates.ROAMING);
    store.set('enemy')({});
  };

  const run = () => {
    store.set('gameState')(gameStates.ROAMING);
    store.set('enemy')({});
  };

  return (
    <BattleTextBox>
      <PixelText battle>
        A wild
        {pkmn.isShiny ? <Text style={{ color: 'yellow' }}> shiny </Text> : ' '}
        <Text style={{ textTransform: 'uppercase' }}>{pkmn.name}</Text>{' '}
        appeared!
      </PixelText>

      <View style={styles.options}>
        <TouchableOpacity onPress={catchPkmn}>
          <PixelText battle>
            <Image source={assets.POKEBALL} style={{ width: 16, height: 16 }} />
            <Text style={{ textTransform: 'uppercase', paddingLeft: 8 }}>
              Catch
            </Text>
          </PixelText>
        </TouchableOpacity>

        <TouchableOpacity onPress={run}>
          <PixelText battle>
            <Text style={{ textTransform: 'uppercase' }}>Run</Text>
          </PixelText>
        </TouchableOpacity>
      </View>
    </BattleTextBox>
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
    bottom: '30%',
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
  options: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
  },
});

const Encounter = Store.withStore(UnconnectedEncounter);

export { Encounter };
