export function UpMovie(){
    return(
        <div className="flex flex-col bg-[#D980FA] justify-center items-center h-screen">
            <div className="my-[32px]">
                <p className="text-[#fff]">
                    Cadastro de filme
                </p>
            </div>
            <div className="flex flex-col justify-between max-h-max p-[20px] rounded-[12px] shadow-2xl">
                <div className="my-[12px]">
                    <p className="text-[#fff]">Titulo</p>
                    <input className="rounded-[12px] p-[4px]" type="text" />
                </div>
                <div className="my-[12px]">
                    <p className="text-[#fff]">Duracao</p>
                    <input className="rounded-[12px] p-[4px]" type="number" />
                </div>
                <div className="my-[12px]">
                    <p className="text-[#fff]">Data de lancamento</p>
                    <input className="rounded-[12px] p-[4px]" type="text" />
                </div>
                
                <button className="text-[#fff] shadow-inner max-w-max p-[4px]  rounded-[12px] hover:bg-[#fff] hover:text-[#D980FA] hover:shadow-2xl">Cadastrar</button>

            </div>
            
        </div>
    )
}