function Artistas(){
    return(
        <div className="mt-20 font-inter animate__animated animate__fadeIn animate__delay-3s">
            <h1 className="text-4xl w-36 font-semibold hover:text-buttuns hover:duration-500 hover:cursor-pointer">Artistas</h1>
            <div className="flex gap-9 mt-8 max-md:flex-col max-md:items-center max-md:w-96">
                <div className="relative">
                    <img src="art5.svg" alt="" className="cursor-pointer hover:scale-105 hover:duration-500 max-md:w-96"/>
                    <div className="absolute top-4 pl-5 text-white">
                        <p className="text-xl font-semibold">Sabine Lowe</p>
                        <p className="font-extralight">Design e Fotógrafa</p>
                    </div>
                </div>
                <div className="relative">
                    <img src="art6.svg" alt="" className="cursor-pointer hover:scale-105 hover:duration-500 max-md:w-96"/>
                    <div className="absolute top-4 pl-5 text-white">
                        <p className="text-xl font-semibold">Eleanor Pena</p>
                        <p className="font-extralight">Escritora e Design</p>
                    </div>
                </div>
                <div className="relative">
                    <img src="art7.svg" alt="" className="cursor-pointer hover:scale-105 hover:duration-500 max-md:w-96"/>
                    <div className="absolute top-4 pl-5 text-white">
                        <p className="text-xl font-semibold">Leslie Alexander</p>
                        <p className="font-extralight">Diretora de arte</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Artistas