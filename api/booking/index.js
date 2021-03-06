import express from "express";
import { isAuth, isAdmin } from "../middlewares/auth.middleware.js";
const router = express.Router();

import {
  deleteSingleBookingByToken,
  getBookingsByOwner,
  getBookingsByToken,
  getAllBookingsByOwner,
  postBooking,
  findByTokenAndUpdate,
} from "./booking.controller.js";
import { checkIfOwnerExistMiddleware } from "./booking.middleware.js";

router.get("/byToken/:bookingToken", getBookingsByToken);
router.get("/byOwner/:owner", getBookingsByOwner);
router.get("/allByOwner/:owner", getAllBookingsByOwner);
// El orden de las funciones importa porque estamos metiendo un middleware
router.post("/", checkIfOwnerExistMiddleware, postBooking);
router.put("/byToken/put/:bookingToken", isAuth, findByTokenAndUpdate);
router.delete("/byToken/delete/:bookingToken", isAuth, deleteSingleBookingByToken);

export default router;
