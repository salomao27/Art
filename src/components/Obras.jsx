function Obras(){
    return(
        <div className="flex mt-16 gap-7 animate__animated animate__fadeIn animate__delay-2s max-md:flex-col max-md:items-center max-md:w-96 max-md:animate__delay-1s">
            <img src="art2.svg" alt="pintura" className="cursor-pointer hover:scale-105 hover:duration-500 max-md:w-screen"/>
            <img src="art3.svg" alt="pintura" className="cursor-pointer hover:scale-105 hover:duration-500 max-md:w-screen"/>
            <img src="art4.svg" alt="pintura" className="cursor-pointer hover:scale-105 hover:duration-500 max-md:w-screen"/>
            <div className="font-inter ml-20 max-md:flex max-md:flex-col max-md:ml-0">
                <h1 className="text-2xl font-semibold w-title_obras max-md:pl-4 max-md:w-screen">Confira as ultimas coleções</h1>
                <button className="bg-buttuns text-white px-7 py-2 rounded font-bold mt-6 max-md:mx-6">VER MAIS</button>
            </div>
        </div>
    )
}
export default Obras