import { createConnectedStore } from 'undux';

// Declare your store's initial state.
const initialState = {
  gameState: 'roaming',
  steps: 0,
};

// Create & export a store with an initial value.
export default createConnectedStore(initialState);
