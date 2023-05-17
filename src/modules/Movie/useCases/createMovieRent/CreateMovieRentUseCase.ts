import { AppError } from "../../../../erros/AppErros";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRentDTO } from "../../dtos/CreateMovieRentDTO";

export class CreateMovieRentUseCase{
    async execute({movieId, userId}: CreateMovieRentDTO):Promise<void>{
        //verificar filme

        const movieExist = await prisma.movie.findUnique({
            where:{
                id: movieId
            }
        });

        if(!movieExist){
            throw new AppError("Movie does not exist")
        }

        //verfificar filme alugado
        const movieAlreadyRented = await prisma.movieRent.findFirst({
            where:{
                movieId
            }
        })

        if(movieAlreadyRented){
            throw new AppError("Movie already rented")
        }

        //verificar usuário
        const userExist = await prisma.user.findUnique({
            where:{
                id: userId
            }
        })

        if(!userExist){
            throw new AppError("User does not exist")
        }

        //criar aluguel

        await prisma.movieRent.create({
            data:{
                movieId,
                userId
            }
        })
    }
}