import express from "express";
const router = express.Router();
import { getAllTables, getAllTablesByOwner } from "./tables.controller.js";

router.get("/", getAllTables);
router.get("/:owner", getAllTablesByOwner);

export default router;
