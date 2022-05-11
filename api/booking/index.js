import express from "express";
const router = express.Router();

import { getBookingsByToken, postBooking} from "./booking.controller.js";
import { checkIfOwnerExistMiddleware } from "./booking.middleware.js";

router.get("/byToken/:bookingToken", getBookingsByToken);
router.post("/", checkIfOwnerExistMiddleware, postBooking);

export default router;