// src/app/utils/pokemonAPI.js
export const fetchAllPokemon = async () => {
  try {
    const res = await fetch("/api/pokemon/cards");
    if (!res.ok) throw new Error("Erro na requisição interna");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Erro ao buscar todos os Pokémon:", err);
    return [];
  }
};
