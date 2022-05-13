import express from "express";
const router = express.Router();

import { login, create } from "./auth.contoller.js";

router.post("/login", login);
router.post("/create", create);

export default router;
