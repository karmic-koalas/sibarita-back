import express from "express";
const router = express.Router();
import { getAllBookings, getBookingsByToken } from "./booking.controller.js";

router.get("/", getAllBookings);
router.get("/byToken/:bookingToken", getBookingsByToken);
router.get("/bytoken/:bookingToken", getBookingsByToken);

export default router;
