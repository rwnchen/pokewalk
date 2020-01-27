import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Store, { gameStates } from './store';

import { Box, PixelText, Spacer } from './util';

const UnconnectedPokedex = () => {
  const store = Store.useStore();

  const pokemon = store.get('trainerPokemon');

  const renderList = () => {
    console.log(pokemon.length);
    if (pokemon.length === 0) {
      return (
        <View>
          <PixelText>No pokemon yet!</PixelText>
          <PixelText>Go catch some!</PixelText>
        </View>
      );
    } else {
      return (
        <FlatList
          data={pokemon}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(_, idx) => idx.toString()}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <Box>{renderList()}</Box>
      <Spacer height={16} />

      <TouchableOpacity
        onPress={() => store.set('gameState')(gameStates.ROAMING)}
        style={styles.backContainer}
      >
        <Box>
          <PixelText>Go back</PixelText>
        </Box>
      </TouchableOpacity>
    </View>
  );
};

const Item = ({ item }) => {
  return (
    <View style={styles.dexEntry}>
      <Image source={{ uri: item.sprite }} style={styles.dexSprite} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  backContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '30%',
  },
  dexEntry: {
    width: '100%',
  },
  dexSprite: {
    width: 100,
    height: 100,
  },
});

const Pokedex = Store.withStore(UnconnectedPokedex);

export { Pokedex };
