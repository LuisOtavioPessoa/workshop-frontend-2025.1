"use client";

import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import { fetchAllPokemon } from "@/app/utils/pokemonAPI";

export default function PokemonPack() {
  const [pokemonPack, setPokemonPack] = useState([]);
  const [allPokemon, setAllPokemon] = useState([]);

  // Busca apenas 12 pokemons
  useEffect(() => {
    fetchAllPokemon()
      .then((data) => setAllPokemon(data))
      .catch((err) => console.error("Erro ao buscar Pokémon para pack:", err));
  }, []);

  const pickRandomPokemon = () => {
    if (allPokemon.length > 0) {
      const remainingPokemon = allPokemon.filter(
        (p) => !pokemonPack.some((card) => card.id === p.id)
      );
      if (remainingPokemon.length === 0) return;
      const shuffled = [...remainingPokemon].sort(() => 0.5 - Math.random());
      setPokemonPack(shuffled.slice(0, 6));
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={pickRandomPokemon}
        className="relative flex items-center justify-center border-4 border-black text-black font-bold text-4xl p-4 px-6 rounded-xl w-104 h-20 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-gradient-to-b from-red-500 to-white cursor-pointer"
      >
        Ganhe um Card
        <img src="images/Pokemon_Card.png" alt="PokemonCard" className="absolute right-3 w-12" />
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {pokemonPack.map((pokemon) => (
          <div key={pokemon.id} className="flex justify-center items-center">
            <div className="border-4 border-black rounded-xl p-4 bg-gradient-to-b from-red-500 to-white shadow-lg">
              <PokemonCard pokemon={pokemon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
