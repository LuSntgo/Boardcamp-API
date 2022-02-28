import { Router } from "express";
import { addGame, getGames } from "../Controllers/gamesController.js";
import { validateSchemaMiddleware } from "../Middlewares/validateSchemaMiddleware.js";
import gamesSchema from "../schemas/gamesSchemas.js";


const gamesRouter = Router();

gamesRouter.get('/games', getGames);
gamesRouter.post('/games', validateSchemaMiddleware(gamesSchema), addGame)

export default gamesRouter;