import { Router } from "express";
import { CreateMovieController } from "../modules/Movie/useCases/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/Movie/useCases/createMovieRent/CreateMovieRentController";

const createMovieController = new CreateMovieController();
const createMovieRentControlle = new CreateMovieRentController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.post("/rent", createMovieController.handle)

export{movieRoutes};