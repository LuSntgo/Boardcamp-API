import { Router } from "express";
import categoriesRouter from "./categoryRouter.js";
import gamesRouter from "./gamesRouter.js";


const router = Router();
router.use(gamesRouter);
router.use(categoriesRouter);

export default router;