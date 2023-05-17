import { Router } from "express";
import { CreateMovieController } from "../modules/Movie/useCases/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/Movie/useCases/createMovieRent/CreateMovieRentController";
import { GetMovieByDateController } from "../modules/Movie/useCases/getMovieByDate/GetMovieByDateController";

const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();
const getMovieByDateController = new GetMovieByDateController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.post("/rent", createMovieRentController.handle)
movieRoutes.get("/release", getMovieByDateController.handle)

export{movieRoutes};