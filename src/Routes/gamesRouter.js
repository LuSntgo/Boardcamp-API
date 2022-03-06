import { Router } from "express";
import { addGame, getGames } from "../Controllers/gamesController.js";

import validateGameMiddleware from "../Middlewares/validateGameMiddleware.js";

const gamesRouter = Router();

gamesRouter.get("/games", getGames);
gamesRouter.post("/games", validateGameMiddleware, addGame);

export default gamesRouter;