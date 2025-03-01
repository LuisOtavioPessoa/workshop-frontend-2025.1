export default function Nav(){
    return(

    <div 
        className="flex flex-row gap-4">

        <div 
            className="rounded-md border-4 border-black bg-white px-6 shadow-lg">

            <a 
            href="#home"
            className="text-2xl font-semibold"
            >
            Início
            </a>
            
        </div>

        <div 
            className="rounded-md border-4 border-black bg-white px-6 shadow-lg">

            <a 
            href="#cartas"
            className="text-2xl font-semibold"
            >
            Cartas
            </a>
            
        </div>
    </div>
    );
}