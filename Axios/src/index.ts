import axios from 'axios';
import type { Pokemon } from './interfaces/pokemonInteface.ts'

async function getRandomPokemon() {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const totalPok = res.data.count;

    const randomId = Math.floor(Math.random() * totalPok) + 1;

    const pokeRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const pokemon = pokeRes.data;

    console.log("Pokémon aleatorio:");
    console.log({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other["official-artwork"].front_default,
    });
  } catch (error) {
    console.error("Error al traer Pokémon:", error);
  }
}

getRandomPokemon();


async function getPokemonByName(name: string) {
  try {
    const res = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const pokemon = res.data;

    console.log(`
      Id Pokemon: ${pokemon.id}
      Nombre: ${pokemon.name}
      Primera habilidad: ${pokemon.abilities[0]?.ability.name}
      Imagen: ${pokemon.sprites.other["official-artwork"].front_default}
    `);
  } catch (error) {
    console.error(`No se encontró el Pokémon con nombre "${name}".`, error);
  }
}

getPokemonByName("pikachu");
getPokemonByName("charizard");