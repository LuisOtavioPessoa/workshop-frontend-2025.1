

export default function Footer() {
    return (
      <div 
        className="flex space-x-4 items-center p-4 w-full">

        <div 
            className="relative flex items-center justify-start">

          <img 
            className="w-15" 
            src="images/Pokedex_Kanto.webp" 
            alt="Pokedex" 
          />

          <p 
            className="text-xl font-bold text-white p-2 ml-2">
            Desenvolvido por Luís Otávio
          </p>

        </div>
  
        <div 
            className="flex space-x-2 items-center">
          
          <a 
            href="https://www.linkedin.com/in/lu%C3%ADsot%C3%A1viopessoa/"
            target="_blank">

            <img 
              className="w-12 rounded-lg" 
              src="images/Linkedin.webp" 
              alt="LinkedIn" 
            />

          </a>
  

          <a 
            href="https://github.com/LuisOtavioPessoa"
            target="_blank">

            <img 
              className="w-12 rounded-lg" 
              src="images/github.png" 
              alt="GitHub" 
            />

          </a>

        </div>
      </div>
    );
}
  