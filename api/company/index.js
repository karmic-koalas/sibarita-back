import express from "express";
import { getAllCompanies } from "./company.controller.js";

const router = express.Router();

router.get("/", getAllCompanies);
// router.get('/:id', getCompany);
// router.post('/', postCompany);
// router.delete('/:id', deleteCompany);

export default router;
