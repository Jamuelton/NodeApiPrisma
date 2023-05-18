export function Navbar(){
    return(
        <div className="grid grid-cols-12">
            <div className="col-span-4 flex items-center w-screen h-[80px] bg-[#9980FA]">
                <p className="text-[#fff] font-bold text-[24px] mx-[32px]">
                    Aluguel de filmes
                </p>
            </div>
            <div className="col-span-8 flex flex-row justify-end items-center mx-[20px]">

                <div className="mx-[12px]">
                    <p className="text-[#fff] text-[16px]">
                        Filmes
                    </p>
                </div>
                <div className="mx-[12px]">
                    <p className="text-[#fff] text-[16px]">
                        Usuario
                    </p>
                </div>

            </div>
            
        </div>
    )
}