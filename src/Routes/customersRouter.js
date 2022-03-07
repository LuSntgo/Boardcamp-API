import { Router } from "express";
import { addCustomers, getCustomer, getCustomers, updateCustomer } from "../Controllers/customersController.js";


const customersRouter = Router();

customersRouter.get("/customers", getCustomers);
customersRouter.get("/customers/:id", getCustomer);
customersRouter.post("/customers", addCustomers);
customersRouter.put("/customers/:id", updateCustomer);

export default customersRouter;