

function Header(){
    return(
        <div className="flex font-inter items-center mt-5 ml-3">
            <h1 className="font-semibold text-3xl mr-title_input_header max-md:mr-44">Art.</h1>
            <div className="relative max-md:hidden">
                <input type="text" className="bg-input rounded w-largura_input h-altura_input pl-6 mr-input_button_header" placeholder="Buscar"/>
                    <img src="fsearch.svg" alt="" className="absolute top-1/3 left-1"/>
            </div>
            
            <button className="bg-buttuns text-white px-7 py-2 rounded">ENTRAR</button>
        </div>
    )
}
export default Header