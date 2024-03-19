import { Router } from "express";
import teste from "./app/controllers/teste";

const routes = Router();

routes.get("/hello", teste.index);


export default routes;