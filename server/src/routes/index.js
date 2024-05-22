import Router from "express";
import { DefaultController } from "../controllers/defaultController.js";
import {ArticleController} from "../controllers/articleController.js";

export const indexRouter = Router();

indexRouter.get("/", DefaultController.index);
indexRouter.get("/articles", ArticleController.index);
