import { createConnectedStore } from 'undux';
import generatePkmn from '../scripts/pokemonGenerator';

const gameStates = {
  ROAMING: 'roaming',
  ENCOUNTER: 'encounter',
};

export const BASE_ENCOUNTER_RATE = 0.5;

const initialState = {
  gameState: gameStates.ROAMING,
  steps: 0,
  enemy: {},
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

  return store;
};

export default createConnectedStore(initialState, effects);
export { gameStates };
