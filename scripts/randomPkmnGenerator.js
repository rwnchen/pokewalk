const pokemon = require('../data/pokemon');

const generatePkmn = () => {
  const pkmnIdx = Math.floor(Math.random() * pokemon.length);

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

console.log(generatePkmn());

module.exports = generatePkmn;
