import express from "express";
import { login, create, getDataUser } from "./auth.contoller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", isAuth, getDataUser);
router.post("/login", login);
router.post("/create", create);

export default router;
