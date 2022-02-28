import { Router } from "express";
import gamesRouter from "./gamesRouter.js";


const router = Router();
router.use(gamesRouter)
export default router;