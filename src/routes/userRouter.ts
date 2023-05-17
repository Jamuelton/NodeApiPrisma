import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetUserController } from "../modules/users/useCases/getUser/GetUserController";

const createUserController = new CreateUserController();
const getUserController = new GetUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/allUsers", getUserController.handle);

export {userRoutes};