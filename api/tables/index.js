import express from "express";
const router = express.Router();
import { getAllTables, getAllTablesByOwnerAPI } from "./tables.controller.js";

router.get("/", getAllTables);
router.get("/:owner", getAllTablesByOwnerAPI);

export default router;
