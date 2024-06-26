import 'animate.css';

function Apresentation(){
    return(
        <div className="flex gap-48 font-inter mt-header_apresentation max-md:ml-2 max-md:mt-14">
            <div className="flex flex-col justify-center animate__animated animate__fadeInDown">
                <h1 className="font-semibold text-5xl w-title_apresentation max-md:text-4xl max-md:w-96">Descubra novos artistas e suas obras</h1>
                <p className="text-2xl mt-6 text-paragraph max-md:text-base  max-md:w-96">Uma nova geração de jovens artistas surgem</p>
                <button className="bg-buttuns font-bold text-white px-10 py-2 rounded mt-12 mr-80 max-md:mr-5 max-md:mt-5">EXPLORAR</button>
                <div className="flex mt-12 max-md:w-96 max-md:justify-center ">
                    <div className="flex flex-col items-center mr-16 max-md:mr-8">
                        <h2 className="text-2xl font-semibold">+ 2 mil</h2>
                        <p className="text-paragraph">Artistas</p>
                    </div>
                    <div className="flex flex-col items-center mr-16 max-md:mr-8">
                        <h2 className="text-2xl font-semibold">+ 7 mil</h2>
                        <p className="text-paragraph">Vendas</p>
                    </div>
                    <div className="flex flex-col items-center max-md:mr-8">
                        <h2 className="text-2xl font-semibold">+ 16 mil</h2>
                        <p className="text-paragraph">Avaliações</p>
                    </div>
                </div>
            </div>
            <div className="animate__animated animate__fadeIn animate__delay-1s">
                <img src="art1.svg" alt="pintura"/>
            </div>

        </div>
    )
}
export default Apresentation