import express from "express";
const router = express.Router()
import { getAllBookings, getAllBookingsByToken} from "./booking.controller.js";

router.get('/', getAllBookings);
router.get('/:bookingToken', getAllBookingsByToken);

export default router;
