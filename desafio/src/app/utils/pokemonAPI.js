// src/utils/pokemonAPI.js
const BASE_URL = "https://api.pokemontcg.io/v2/cards";

// Cabeçalhos recomendados pela API
const HEADERS = {
    "X-Api-Key": "YOUR_API_KEY_IF_ANY", // se tiver, senão pode remover
};

export const fetchPokemonPage = async (page = 1, pageSize = 20) => {
    try {
        const res = await fetch(`${BASE_URL}?page=${page}&pageSize=${pageSize}`, {
            headers: HEADERS,
            cache: "no-store", // evita problemas com SSR
        });
        if (!res.ok) throw new Error("Erro na requisição");
        const data = await res.json();
        return data.data;
    } catch (err) {
        console.error("Erro ao buscar Pokémon:", err);
        return [];
    }
};

// Agora só busca as primeiras 250 cartas (limitando para evitar sobrecarga)
export const fetchAllPokemon = async () => {
    try {
        const res = await fetch(`${BASE_URL}?page=1&pageSize=250`, {
            headers: HEADERS,
            cache: "no-store",
        });
        if (!res.ok) throw new Error("Erro na requisição");
        const data = await res.json();
        return data.data;
    } catch (err) {
        console.error("Erro ao buscar todos os Pokémon:", err);
        return [];
    }
};
