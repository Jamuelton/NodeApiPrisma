import { Link } from "react-router-dom";
import { Footer } from "../../footer/Footer";
import { Navbar } from "../../navBar/Navbar";

export function Movie(){
    return(
        <div>
            <Navbar/>
            <div>
                <div>
                    <Link to="/upmovie">
                        <button>Cadastrar novo filme</button>
                    </Link>
                </div>
                <div>
                    Listar filmes
                </div>
            </div>
            <Footer/>
        </div>
    )
}