import React, { useState } from "react";

const imagesCarrossel = [
    "images/pikachu.jpg",
    "images/charizard.jpg",
    "images/gengar.jpg",
    "images/lucario.jpg",
    "images/mewtwo.jpg",
    "images/rayquaza.jpg",
];

export default function Carrossel() {
    const [imagemAtual, setImagemAtual] = useState(0);

    function nextSlide() {
        setImagemAtual(imagemAtual === imagesCarrossel.length - 1 ? 0 : imagemAtual + 1); // <- Se o Array tiver na última imagem vai retornar para 0, senão, vai para a próxima imagem
    }

    function prevSlide() {
        setImagemAtual(imagemAtual === 0 ? imagesCarrossel.length - 1 : imagemAtual - 1); // <- Se o Array tiver na primeira imagem vai retornar para a última,senão, volta para a imagem anterior
    }

    return (
        <div 
            id="home"
            className="w-full flex justify-center items-center mt-20 mb-20 relative">
            
            
            <img
                src="images/left-arrow.png"
                alt="seta-esquerda"
                className="absolute left-5 z-10 bg-zinc-200 p-3 rounded-lg cursor-pointer w-16 hover:scale-110 transition sm:w-12 md:w-16 lg:w-16 xl:w-16"
                onClick={prevSlide}
            />

            
            <div 
                className="w-full max-w-full md:max-w-[1000px] lg:max-w-[1200px] h-[300px] md:h-[500px] lg:h-[700px] bg-gray-100 rounded-2xl shadow-lg flex justify-center items-center overflow-hidden">

                {imagesCarrossel.map(
                    (imagemCarrossel, index) => // <- ImagemCarrossel representa o item atual da iteração dentro do Array
                        imagemAtual === index && (
                            <div 
                                key={imagemCarrossel} 
                                className="w-full h-full flex justify-center">
                                <img
                                    src={imagemCarrossel}
                                    alt="Imagem do Carrossel"
                                    className="w-full h-full object-cover rounded-2xl border-zinc-200 border-8 transition-all"
                                />
                            </div>
                        )
                )}
            </div>

            <img
                src="images/right-arrow.png"
                alt="seta-direita"
                className="absolute right-5 z-10 bg-gray-200 p-3 rounded-lg cursor-pointer w-16 hover:scale-110 transition sm:w-12 md:w-16 lg:w-16 xl:w-16"
                onClick={nextSlide}
            />
            
        </div>
    );
}
