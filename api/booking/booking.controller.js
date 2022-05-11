import bookingModel from "./booking.model.js";
import humanId from "../human-id/human-id.js";

/**
 * EXPRESS SECTION
 */

// Get all bookings from one company!!!
export function getBookingsByToken(req, res) {
  return bookingModel.findOne({ bookingToken: req.params.bookingToken }).then((response) => {
    if (response === null) {
      return [];
    } else {
      return res.json(response);
    }
  });
}

export function postBooking(req, res) {
  const newBooking = new bookingModel({
    client: req.body.client,
    owner: req.body.owner,
    bookingToken: humanId({
      separator: "-",
      capitalize: false,
      adjectives: [],
      nouns: [
        "erik",
        "pedrocamejo",
        "pedrort",
        "cesar",
        "pedrocd",
        "juancesar0",
        "maximodm",
        "deviluppercase",
      ],
    }),
    bookingDate: req.body.bookingDate,
    numPerson: req.body.numPerson,
  });

  return newBooking
    .save()
    .then((result) => res.json(result))
    .catch((error) => res.status(400).json(error));
}
