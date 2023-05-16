import { Router } from "express";
import { userRoutes } from "./userRouter";
import { movieRoutes } from "./movieRouter";

const routes = Router();

routes.use("/users", userRoutes)
routes.use("/movies", movieRoutes)

export {routes}