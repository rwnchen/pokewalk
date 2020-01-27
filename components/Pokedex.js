import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Store, { gameStates } from './store';

import { Box, PixelText, Spacer } from './util';

const UnconnectedPokedex = () => {
  const store = Store.useStore();

  const pokemon = store.get('trainerPokemon');

  const renderList = () => {
    const totalPkmn = pokemon.length;
    if (totalPkmn === 0) {
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
          renderItem={({ item, index }) => (
            <Item item={item} idx={index} totalPkmn={totalPkmn} />
          )}
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

const Item = ({ item, idx, totalPkmn }) => {
  const divider = idx === totalPkmn - 1 ? {} : styles.divider;
  return (
    <View style={{ ...styles.dexEntry, ...divider }}>
      <Image source={{ uri: item.sprite }} style={styles.dexSprite} />
      <View>
        <PixelText>
          <Text style={{ textTransform: 'uppercase' }}>{item.name}</Text>
        </PixelText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '80%',
  },
  backContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '30%',
  },
  dexEntry: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dexSprite: {
    width: 100,
    height: 100,
  },
  divider: {
    borderBottomColor: '#98c8f8',
    borderBottomWidth: 1,
  },
});

const Pokedex = Store.withStore(UnconnectedPokedex);

export { Pokedex };
