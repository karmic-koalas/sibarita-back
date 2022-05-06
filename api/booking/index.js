import express from "express";
const router = express.Router();
import { getAllBookings, getBookingsByToken, dummy } from "./booking.controller.js";

router.get("/", getAllBookings);
router.get("/byToken/:bookingToken", getBookingsByToken);
router.get("/dummy", dummy);

export default router;
