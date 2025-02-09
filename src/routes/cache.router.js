import express from "express";
import { addCache, readCache, removeCache } from "../controllers/cache.controller";

const cacheRouter=express.Router()

cacheRouter.post("/",addCache)
cacheRouter.get("/:key",readCache)
cacheRouter.get("/:key",removeCache)