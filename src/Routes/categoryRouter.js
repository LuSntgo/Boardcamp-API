import { Router } from "express";
import { addCategory, getCategories } from "../Controllers/categoriesController.js";
import { validateCategoryMiddleware } from "../Middlewares/validateCategoryMiddleware.js";


const categoriesRouter = Router();

categoriesRouter.get("/categories", getCategories);
categoriesRouter.post("/categories", validateCategoryMiddleware, addCategory);

export default categoriesRouter;
