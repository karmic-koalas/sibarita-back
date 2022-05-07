import express from "express";
const router = express.Router();
import { getBookingsByToken, newBooking } from "./booking.controller.js";

router.get("/byToken/:bookingToken", getBookingsByToken);
router.post("/", newBooking);

export default router;
