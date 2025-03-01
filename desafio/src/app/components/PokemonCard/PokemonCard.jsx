export default function PokemonCard({pokemon}){

    return(
        <div 
            className="flex flex-col items-center justify-around gap-3 bg-blue-700 rounded-xl p-3 w-80 shadow-lg">

            <div 
                className="flex flex-col items-center gap-3 justify-center">
                    <h1 
                        className="font-bold text-4xl text-center text-slate-950">
                        {pokemon.name}
                    </h1>

                    <img 
                    className="rounded-lg border-8 border-slate-200"
                    src={pokemon.images.large} 
                    alt= {pokemon.name} 
                    />

                    <p 
                        className="font-bold text-3xl text-center text-slate-950">
                        Tipo: {pokemon.types}
                    </p>

            </div>
        </div>
    );
}