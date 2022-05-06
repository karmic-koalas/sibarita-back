import express from "express";
const router = express.Router();
import {
  getAllBookings,
  getAvailableBookingsAPI,
  getBookingsByToken,
  newBooking
} from "./booking.controller.js";

router.get("/", getAllBookings);
router.get("/byToken/:bookingToken", getBookingsByToken);
router.get("/available/:owner/:date/:hour", getAvailableBookingsAPI);

router.post("/", newBooking);

export default router;
