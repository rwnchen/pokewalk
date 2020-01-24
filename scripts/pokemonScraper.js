/******************************************************************************/
// ALL DATA TAKEN FROM https://pokeapi.co
/******************************************************************************/

const axios = require('axios');
const fs = require('fs');

const ONLY_DAMAGE_MOVES = true;

/**
 * Fetches the first {num} Pokemon in the dex from the PokeAPI.
 * @param {Integer} num the number of Pokemon to be fetched
 */
const getPokemon = async (num) => {
  try {
    const urls = [];
    for (let i = 1; i <= num; i++) {
      urls.push('https://pokeapi.co/api/v2/pokemon/' + i);
    }

    const pokemon = await Promise.all(
      urls.map((url) => {
        return axios.get(url);
      })
    ).then((responses) => {
      return responses.map((res) => {
        const pokemon = res.data;
        const name = pokemon.name;
        const stats = {};
        pokemon.stats.forEach((obj) => {
          stats[obj.stat.name] = obj.base_stat;
        });
        const moves = pokemon.moves.map((obj) => {
          const urlParts = obj.move.url.split('/');
          const id = urlParts[urlParts.length - 2];
          return { id, name: obj.move.name };
        });
        const sprites = pokemon.sprites.front_default;
        const types = pokemon.types.map((obj) => obj.type.name);

        console.log(`${name} scraped`);
        return { name, stats, moves, sprites, types };
      });
    });

    console.log('-----ALL POKEMON SCRAPED-----');
    return pokemon;
  } catch (err) {
    console.log(err);
  }
};

/**
 * Takes an array of Pokemon and consolidates all of their moves, removing
 * duplicates.
 * @param {Array[Object]} pokemon the array of Pokemon
 */
const getUniqueMoves = (pokemon) => {
  let moves = new Set();

  Object.values(pokemon).forEach((pkmn) => {
    pkmn.moves.forEach((move) => moves.add(move.name));
  });

  return moves;
};

/**
 * Takes an array of Pokemon and filters out moves according to rules for
 * allowed moves, e.g. only using damaging moves.
 * @param {Array[Object]} pokemon the array of Pokemon
 * @param {Array[Object]} moves the array of moves we are allowing
 */
const filterMovesets = (pokemon, moves) => {
  return pokemon.map((pkmn) => {
    pkmn.moves = pkmn.moves.filter((move) => {
      return moves[move.id];
    });

    return pkmn;
  });
};

/**
 * Fetches moves data from the PokeAPI given an array of move names.
 * @param {Array[Object]} moveNames the array of move names
 */
const getMoves = async (moveNames) => {
  try {
    let urls = [];
    moveNames.forEach((move) =>
      urls.push('https://pokeapi.co/api/v2/move/' + move)
    );

    const moves = await Promise.all(
      urls.map((url) => {
        return axios.get(url);
      })
    ).then((responses) => {
      const moves = [];
      responses.forEach((res) => {
        const move = res.data;
        moves[move.id] =
          !ONLY_DAMAGE_MOVES || move.power
            ? {
                name: move.name,
                power: move.power,
                accuracy: move.accuracy,
                type: move.type.name,
              }
            : null;

        console.log(`${move.name} scraped`);
      });

      return moves;
    });

    console.log('------ALL MOVES SCRAPED------');
    return moves;
  } catch (err) {
    console.log(err);
  }
};

/**
 * Scraper
 */
const run = async () => {
  let pkmn = await getPokemon(9);
  const uniqueMoves = getUniqueMoves(pkmn);
  const moves = await getMoves(uniqueMoves);
  if (ONLY_DAMAGE_MOVES) pkmn = filterMovesets(pkmn, moves);

  fs.writeFile(
    './data/pokemon.js',
    `const pokemon = ${JSON.stringify(pkmn)}; module.exports = pokemon;`,
    (err) =>
      err ? console.log(err) : console.log('=====POKEMON FILE WRITTEN=====')
  );

  fs.writeFile(
    './data/moves.json',
    `const moves = ${JSON.stringify(moves)}; module.exports = moves;`,
    (err) =>
      err ? console.log(err) : console.log('=====MOVE FILE WRITTEN=====')
  );
};

run();
