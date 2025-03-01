"use client";
import Carrossel from "./components/Carrossel";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonPack from "./components/PokemonPack/PokemonPack";

export default function Home() {
  return(
    <main className="flex flex-col items-center justify-start p-16 py-12 min-h-screen">
        
      <div className="min-w-full">
        {/* ---HEADER--- */}
        <Nav/>
      </div>

      {/* ---Carrossel--- */}
      <Carrossel/>

      {/* ---Botão Card Pokemon Aleatório --- */}
      <PokemonPack/>

      {/* ---Lista das Cartas--- */}
      <PokemonList/>

      <Footer/>

    </main>
    
  );
};


