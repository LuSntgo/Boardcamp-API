import { Router } from "express";
import { addCustomers, getCustomer, getCustomers, updateCustomer } from "../Controllers/customersController.js";
import { validateCustomersMiddleware, validateUpgradeCustomersMiddleware } from "../Middlewares/validateCustomersMiddleware.js";

const customersRouter = Router();

customersRouter.get("/customers",getCustomers);
customersRouter.get("/customers/:id", getCustomer);
customersRouter.post("/customers", validateCustomersMiddleware, addCustomers);
customersRouter.put("/customers/:id",validateUpgradeCustomersMiddleware ,updateCustomer);

export default customersRouter;