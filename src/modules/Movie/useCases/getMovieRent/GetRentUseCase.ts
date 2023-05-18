import { MovieRent } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetRentUseCase{
    async execute():Promise<MovieRent[]>{
        const moviesRent = await prisma.movieRent.findMany({
           
        })

        return moviesRent;
    }
}