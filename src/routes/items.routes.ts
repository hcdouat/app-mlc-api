import { Router } from "express";
import { listItems } from "../controllers/items.controller";

export const itemsRouter = Router();

itemsRouter.get("/items", listItems);
