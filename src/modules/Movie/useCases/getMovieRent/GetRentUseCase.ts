import { Movie, MovieRent, User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetRentUseCase{
    async execute(){
        const moviesRent = await prisma.movieRent.findMany({
           select:{
                movie:true,
                user:true
           }
        })

        return moviesRent;
    }
}