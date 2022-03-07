import { Router } from "express";
import { addRentals, deleteRental, getRentals, returnRental } from "../Controllers/rentalsController.js";


const rentalsRouter = Router();

rentalsRouter.get('/rentals', getRentals);
rentalsRouter.post('/rentals', addRentals);
rentalsRouter.post('/rentals/:id/return', returnRental);
rentalsRouter.delete('/rentals/:id', deleteRental);


export default rentalsRouter;
