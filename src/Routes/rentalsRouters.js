import { Router } from "express";
import { addRentals, getRentals } from "../Controllers/rentalsController.js";

const rentalsRouter = Router();

rentalsRouter.post("/rentals", addRentals)
rentalsRouter.get("/rentals", getRentals)


export default rentalsRouter;
