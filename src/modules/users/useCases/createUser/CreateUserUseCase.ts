import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../erros/AppErros";

export class CreateUserUseCase{
    async execute({name, email}: CreateUserDTO): Promise<User>{
        //verificar se o usuário existe

        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if(userAlreadyExists){
            //erro
            throw new AppError("User already exists!");
        }

        //criar usuário

        const user = await prisma.user.create({
            data:{
                name,email
            }
        });

        return user;
    }
}