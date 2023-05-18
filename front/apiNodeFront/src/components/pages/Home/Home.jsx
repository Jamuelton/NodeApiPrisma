import { Footer } from "../../footer/Footer";
import { Navbar } from "../../navBar/Navbar";

export function Home(){
    return(
        <div className="flex flex-col justify-between h-screen">
            <Navbar/>
            <div className="flex flex-col items-center ">
                <h1 className="text-[40px] font-bold text-[#D980FA] my-[24px]">
                    Alugue os melhores filmes
                </h1>
                <p className="text-[20px]">
                    Crie um usuario para alugar um filme
                </p>
                <p className="text-[20px]">
                    Clique para verificar os filmes diponiveis
                </p>
            </div>
            <Footer/>
        </div>
    )
}