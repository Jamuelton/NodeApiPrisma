import { Footer } from "../../footer/Footer";
import { Navbar } from "../../navBar/Navbar";

export function Home(){
    return(
        <div>
            <Navbar/>
            <div>
                conteudo principal
            </div>
            <Footer/>
        </div>
    )
}