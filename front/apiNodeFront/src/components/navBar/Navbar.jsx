import { Link } from "react-router-dom";

export function Navbar(){
    return(
        <div className="grid grid-cols-12">
            <div className="col-span-4 flex items-center w-screen h-[80px] bg-[#FDA7DF]">
                <Link to="/">
                    <p className="text-[#fff] font-bold text-[24px] mx-[32px]">
                        Aluguel de filmes
                    </p>
                </Link>
            </div>
            <div className="col-span-8 flex flex-row justify-end items-center mx-[20px]">

                <div className="mx-[12px]">
                    <Link to="/movies">
                        <p className="text-[#fff] text-[16px]">
                            Filmes
                        </p>
                    </Link>  
                </div>
                <div className="mx-[12px]">
                    <Link to="/user">
                        <p className="text-[#fff] text-[16px]">
                            Usuario
                        </p>
                    </Link>
                    
                </div>

            </div>
            
        </div>
    )
}