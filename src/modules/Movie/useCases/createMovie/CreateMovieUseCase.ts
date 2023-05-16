import { Movie} from "@prisma/client";
import { prisma } from "../../../../prisma/client";

import { AppError } from "../../../../erros/AppErros";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";

export class CreateMovieUseCase{
    async execute({title, duration, release_date}: CreateMovieDTO): Promise<Movie>{
        //verificar se o usuário existe

        const movieAlreadyExists = await prisma.movie.findUnique({
            where: {
                title
            }
        });

        if(movieAlreadyExists){
            //erro
            throw new AppError("Movie already exists!");
        }

        //criar usuário

        const movie = await prisma.movie.create({
            data:{
                title,
                duration,
                release_date
            }
        });

        return movie;
    }
}