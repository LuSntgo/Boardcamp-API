import { Router } from "express";
import {
  addCategory,
  getCategories,
} from "../controllers/categoriesController.js";
import { validateCategoryMiddleware } from "../middlewares/validateCategoryMiddleware.js";

const categoriesRouter = Router();

categoriesRouter.get("/categories", getCategories);
categoriesRouter.post("/categories", validateCategoryMiddleware, addCategory);

export default categoriesRouter;
