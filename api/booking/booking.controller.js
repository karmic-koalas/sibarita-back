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
    contact: req.body.contact,
    owner: req.body.owner,
    bookingToken: resultToken,
    bookingDate: req.body.bookingDate,
    numPerson: req.body.numPerson,
    textArea: req.body.textArea
  });
  return newBooking
    .save()
    .then((result) => res.json(result))
    .catch((error) => res.status(400).json(error));
}


export async function getBookingsByOwner(req, res) {
  const response = await bookingModel.findOne({ owner: req.params.owner });
  if (response === null) {
    return [];
  } else {
    return res.json(response);
  }
}

export async function deleteSingleBookingByID(req, res) {
  const id = req.params._id.valueOf();
  const response = await bookingModel.deleteOne({ _id: id });
  if (response === null) {
    return [];
  } else {
    return res.json(response);
  }
}

export async function findByIdAndUpdate(req, res) {
  let changes = {};
  if (req.body.client) changes.client = req.body.client;
  if (req.body.numPerson) changes.numPerson = req.body.numPerson;
  if (req.body.textArea) changes.textArea = req.body.textArea;
  if (req.body.bookingDate) {
    if (req.body.bookingDate.day && req.body.bookingDate.hour) {
      changes.bookingDate = req.body.bookingDate;
    } else {
      return res.status(400).json("Debe enviar todos los campos en bookingDate.");
    }
  }

  const id = req.params._id.valueOf();
  const response = await bookingModel.findByIdAndUpdate({ _id: id }, changes, {
    returnDocument: "after",
  });
  if (response === null) {
    return [];
  } else {
    return res.json(response);
  }
}


