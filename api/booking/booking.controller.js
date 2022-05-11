import bookingModel from "./booking.model.js";
import humanId from "../../lib/human-id/human-id.js";

function getByToken(token) {
  return bookingModel.findOne({ bookingToken: token }).then((response) => {
    if (response === null) {
      return false;
    } else {
      return response;
    }
  });
}

async function uniqueToken(index = 0) {
  const token = humanId({
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
  });
  if (index > 4) return;
  if ((await getByToken(token)) === false) return token;
  return uniqueToken(index + 1);
}

/**
 * EXPRESS SECTION
 */

// Get all bookings from one company!!!
export function getBookingsByToken(req, res) {
  return getByToken(req.params.bookingToken)
    .then((response) => {
      if (response === false) return res.json([]);
      return res.json(response);
    })
    .catch((error) => res.status(400).json(error));
}

export async function postBooking(req, res) {
  const resultToken = await uniqueToken();

  const newBooking = new bookingModel({
    client: req.body.client,
    owner: req.body.owner,
    bookingToken: resultToken,
    bookingDate: req.body.bookingDate,
    numPerson: req.body.numPerson,
  });

  return newBooking
    .save()
    .then((result) => res.json(result))
    .catch((error) => res.status(400).json(error));
}
