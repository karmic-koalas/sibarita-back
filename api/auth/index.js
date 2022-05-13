import express from "express";
const router = express.Router();

import { login, create, getDataUser } from "./auth.contoller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

router.post("/", isAuth, getDataUser);
router.post("/login", login);
router.post("/create", create);

export default router;
