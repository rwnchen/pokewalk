const axios = require('axios');
const fs = require('fs');

const ONLY_DAMAGE_MOVES = true;

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

const getUniqueMoves = (pokemon) => {
  let moves = new Set();

  Object.values(pokemon).forEach((pkmn) => {
    pkmn.moves.forEach((move) => moves.add(move.name));
  });

  return moves;
};

const filterMovesets = (pokemon, moves) => {
  return pokemon.map((pkmn) => {
    pkmn.moves = pkmn.moves.filter((move) => {
      return moves[move.id];
    });

    return pkmn;
  });
};

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

const run = async () => {
  const pkmn = await getPokemon(9);
  const uniqueMoves = getUniqueMoves(pkmn);
  const moves = await getMoves(uniqueMoves);
  const filteredPokemon = filterMovesets(pkmn, moves);

  fs.writeFile('./data/pokemon.json', JSON.stringify(filteredPokemon), (err) =>
    err ? console.log(err) : console.log('=====POKEMON FILE WRITTEN=====')
  );

  fs.writeFile('./data/moves.json', JSON.stringify(moves), (err) =>
    err ? console.log(err) : console.log('=====MOVE FILE WRITTEN=====')
  );
};

run();
