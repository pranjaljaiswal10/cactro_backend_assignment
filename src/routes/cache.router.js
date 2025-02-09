import express from "express";
import {
  addCache,
  readCache,
  removeCache,
} from "../controllers/cache.controller.js";

const cacheRouter = express.Router();

cacheRouter.post("/", addCache);
cacheRouter.get("/:key", readCache);
cacheRouter.delete("/:key", removeCache);

export default cacheRouter;
