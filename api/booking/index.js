import express from "express";
const router = express.Router()
import { getAllBookings, getAllBookingsByToken} from "./booking.controller.js";

router.get('/', getAllBookings);
router.get('/:id', getAllBookingsByToken);

export default router;
