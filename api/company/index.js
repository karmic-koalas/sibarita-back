import express from "express";
import { getAllCompanies, getCompany } from "./company.controller.js";

const router = express.Router();

router.get("/", getAllCompanies);
router.get("/:owner", getCompany);
// router.post('/', postCompany);
// router.delete('/:id', deleteCompany);

export default router;
