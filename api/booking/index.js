import express from "express";
const router = express.Router();
import { getBookingsByToken, postBooking } from "./booking.controller.js";

router.get("/byToken/:bookingToken", getBookingsByToken);
router.post("/", postBooking);

export default router;
