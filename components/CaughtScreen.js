import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Store, { gameStates } from './store';
import { Box, PixelText } from './util';

const UnconnectedCaught = () => {
  const store = Store.useStore();
  const pkmn = store.get('pokemonToCatch');
  const currPokemon = store.get('trainerPokemon');

  const [inputValue, onChangeText] = React.useState(pkmn.name.toUpperCase());
  return (
    <View>
      <Box>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            source={{ uri: pkmn.sprite }}
            style={{ width: 100, height: 100 }}
          />
          <PixelText>
            You caught a{' '}
            <Text style={{ textTransform: 'uppercase' }}>{pkmn.name}</Text>!
          </PixelText>
          <PixelText>Do you want to give it a name?</PixelText>

          <View style={styles.input}>
            <TextInput
              onChangeText={(text) => onChangeText(text)}
              value={inputValue}
            />
          </View>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              store.set('gameState')(gameStates.ROAMING);
              store.set('trainerPokemon')([
                ...currPokemon,
                { ...pkmn, nickname: inputValue },
              ]);
            }}
          >
            <PixelText>
              <Text style={{ color: 'white' }}>Finish Naming</Text>
            </PixelText>
          </TouchableOpacity>
        </View>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#98c8f8',
  },
  submitButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: '#98c8f8',
  },
});

const CaughtScreen = Store.withStore(UnconnectedCaught);

export { CaughtScreen };
