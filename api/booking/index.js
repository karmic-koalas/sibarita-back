import express from "express";
const router = express.Router();

import { deleteSingleBookingByID, getBookingsByOwner, getBookingsByToken, postBooking, findByIdAndUpdate} from "./booking.controller.js";
import { checkIfOwnerExistMiddleware } from "./booking.middleware.js";

router.get("/byToken/:bookingToken", getBookingsByToken);
router.get("/byOwner/:owner", getBookingsByOwner);
// El orden de las funciones importa porque estamos metiendo un middleware
router.post("/", checkIfOwnerExistMiddleware, postBooking);
router.put("/byID/put/:_id", findByIdAndUpdate);
router.delete("/byID/delete/:_id", deleteSingleBookingByID);

export default router;