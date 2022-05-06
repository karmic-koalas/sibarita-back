import express from "express";
const router = express.Router();
import {
  getAllBookings,
  getAvailableBookingsAPI,
  getBookingsByToken,
} from "./booking.controller.js";

router.get("/", getAllBookings);
router.get("/byToken/:bookingToken", getBookingsByToken);
router.get("/available/:owner/:date/:hour", getAvailableBookingsAPI);

export default router;
