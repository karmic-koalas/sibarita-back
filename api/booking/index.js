import express from "express";
const router = express.Router();
import { getBookingsByToken, newBooking} from "./booking.controller.js";
import { checkIfOwnerExistMiddleware } from "./booking.middleware.js";

router.get("/byToken/:bookingToken", getBookingsByToken);
router.post("/", checkIfOwnerExistMiddleware, newBooking);

export default router;
