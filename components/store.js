import { createConnectedStore } from 'undux';

// Declare your store's initial state.
const initialState = {
  gameState: 'roaming',
  steps: 0,
};

let effects = (store) => {
  store.on('steps').subscribe((steps) => console.log('undux step: ' + steps));
  return store;
};

// Create & export a store with an initial value.
export default createConnectedStore(initialState, effects);
