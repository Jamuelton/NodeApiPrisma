import { Request, Response } from "express";
import { GetRentUseCase } from "./GetRentUseCase";

export class GetRentController{
    async handle(req:Request, res:Response){

        const getRentUseCase = new GetRentUseCase();

        const result = await getRentUseCase.execute();

        return res.status(201).json(result);
    }
}