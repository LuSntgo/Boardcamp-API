import { Router } from "express";
import categoriesRouter from "./categoryRouter.js";
import customersRouter from "./customersRouter.js";
import gamesRouter from "./gamesRouter.js";
import rentalsRouter from "./rentalsRouters.js";

const router = Router();
router.use(gamesRouter);
router.use(categoriesRouter);
router.use(customersRouter)
router.use(rentalsRouter);

export default router;
