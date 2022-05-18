import express from "express";
import { getAllCompanies, getCompany } from "./company.controller.js";
import { isAuth, isAdmin } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/", getAllCompanies);
router.get("/:owner", isAuth, getCompany);

export default router;
