function Footer(){
    return(
        <div className="font-inter mt-10 mb-6 flex items-center relative animate__animated animate__fadeIn animate__delay-2s max-md:block">
        <h1 className="text-2xl font-semibold max-md:text-center">Art.</h1>
        <div className="space-x-16 font-semibold absolute right-0 max-md:relative max-md:space-x-3 max-md:mt-3 max-md:flex max-md:justify-center ">
            <span className="cursor-pointer hover:text-buttuns hover:duration-500">INICIO</span>
            <span className="cursor-pointer hover:text-buttuns hover:duration-500">BUSCAR</span>
            <span className="cursor-pointer hover:text-buttuns hover:duration-500">EXPLORAR</span>
            <span className="cursor-pointer hover:text-buttuns hover:duration-500">SOBRE NÓS</span>
        </div>
        </div>
    )
}
export default Footer