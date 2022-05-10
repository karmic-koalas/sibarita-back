import bookingModel from "./booking.model.js";
import humanId from "../../lib/human-id/human-id.js";

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

export function newBooking(req, res) {
  if (!req.body.client) {
    return res.status(400).send({ error: 400, msg: "No pusiste un client" });
  }
  if (!req.body.owner) {
    return res.status(400).send({ error: 400, msg: "No pusiste un owner" });
  }
  if (!req.body.bookingDate) {
    return res.status(400).send({ error: 400, msg: "No pusiste un date" });
  }
  if (!req.body.numPerson || req.body.numPerson < 1) {
    return res.status(400).send({ error: 400, msg: "No pusiste un numPerson" });
  }

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
  newBooking.save();

  return res.json(newBooking);
}
