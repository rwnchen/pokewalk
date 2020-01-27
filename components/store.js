import { AsyncStorage } from 'react-native';
import { createConnectedStore } from 'undux';
import generatePkmn from '../scripts/pokemonGenerator';

const gameStates = {
  ROAMING: 'roaming',
  ENCOUNTER: 'encounter',
  POKEDEX: 'pokedex',
};

export const BASE_ENCOUNTER_RATE = 1;

const initialState = {
  gameState: gameStates.ROAMING,
  steps: 0,
  enemy: {},
  trainerPokemon: [],
};

let effects = (store) => {
  store.on('steps').subscribe((steps) => {
    console.log('undux step: ' + steps, store.get('gameState'));

    if (store.get('gameState') === gameStates.ROAMING) {
      const isEncounter = Math.random() > 1 - BASE_ENCOUNTER_RATE;

      if (isEncounter) {
        store.set('gameState')(gameStates.ENCOUNTER);
        const pkmn = generatePkmn();
        store.set('enemy')(pkmn);
      }
    }
  });

  store.on('trainerPokemon').subscribe(async (pokemon) => {
    try {
      await AsyncStorage.setItem('pokemon', JSON.stringify(pokemon));
      console.log(pokemon);
    } catch (error) {
      console.log('Error setting data: ', error);
    }
  });

  return store;
};

export default createConnectedStore(initialState, effects);
export { gameStates };
