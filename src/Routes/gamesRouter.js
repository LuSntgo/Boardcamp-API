import { Router } from "express";
import { getGames, addGame } from "../controllers/gamesController.js";
import validateGameMiddleware from "../Middlewares/validateGameMiddleware.js";

const gamesRouter = Router();

gamesRouter.get("/games", getGames);
gamesRouter.post("/games", validateGameMiddleware, addGame);

export default gamesRouter;