// src/app/api/pokemon/cards/route.js

const BASE_URL = "https://api.pokemontcg.io/v2/cards";
const API_KEY = process.env.NEXT_PUBLIC_POKEMON_API_KEY;

export async function GET() {
  try {
    const response = await fetch(`${BASE_URL}?pageSize=20`, {
      headers: {
        "X-Api-Key": API_KEY,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data.data);
  } catch (error) {
    console.error("Erro ao buscar os Pokémon:", error);
    return Response.json({ error: "Erro ao buscar os Pokémon" }, { status: 500 });
  }
}
