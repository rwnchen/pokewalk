const pokemon = require('../data/pokemon');

/**
 * Generates a Pokemon with a random moveset. If a dex number is not specified,
 * it will generate a random Pokemon.
 * @param {*} dexNum The dex number of the Pokemon to be generated
 */
const generatePkmn = (dexNum) => {
  const pkmnIdx = dexNum
    ? dexNum - 1
    : Math.floor(Math.random() * pokemon.length);

  const pkmn = pokemon[pkmnIdx];
  const allMoves = pkmn.moves;
  const moveset = [];

  const seen = {};
  while (moveset.length < 4) {
    const moveIdx = Math.floor(Math.random() * allMoves.length);
    if (!seen[moveIdx]) {
      seen[moveIdx] = true;
      moveset.push(allMoves[moveIdx]);
    }
  }

  return { ...pkmn, moves: moveset };
};

generatePkmn();

module.exports = generatePkmn;
