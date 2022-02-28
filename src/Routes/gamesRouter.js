import { Router } from "express";
import { getGames } from "../Controllers/gamesController.js";


const gamesRouter = Router();

gamesRouter.get('/games', getGames);

export default gamesRouter;