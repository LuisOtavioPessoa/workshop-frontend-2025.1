"use client";

import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import { fetchAllPokemon } from "@/app/utils/pokemonAPI";

export default function PokemonList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      const result = await fetchAllPokemon();
      setData(result);
      setLoading(false);
    };
    fetchCards();
  }, []);

  const filteredData = data.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
      (pokemon.types && pokemon.types.some((type) => type.toLowerCase().includes(search.toLowerCase())))
  );

  return (
    <>
      <div id="cartas" className="relative flex items-center">
        <input
          type="text"
          className="border-4 border-black text-black font-bold text-2xl p-4 px-6 rounded-xl w-96 h-16 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-gradient-to-b from-red-500 to-white"
          placeholder="Pesquise um Pokemon"
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src="images/minipokebola.png" alt="Mini Pokebola" className="absolute right-3 w-14" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
        {filteredData.map((pokemon) => (
          <div
            key={pokemon.id}
            className="border-4 border-black rounded-xl p-4 bg-gradient-to-b from-red-500 to-white shadow-lg flex justify-center items-center"
          >
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>

      {loading && <p className="text-center font-bold text-2xl">Carregando...</p>}
    </>
  );
}
