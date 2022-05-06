import bookingModel from "./booking.model.js";
import { getAllTablesByOwner } from "../tables/tables.controller.js";
import humanId from "../human-id/human-id.js";

function getAllBookingsByOwner(OWNER) {
  return bookingModel
    .find({ owner: OWNER })
    .then((response) => {
      return response;
    })
    .catch((err) => err);
}

function getAllBookingsByDate(day, hour) {
  switch (hour) {
    case undefined: // Si no se solicita informacion sobre hora
      return (
        bookingModel
          //RECUERDA: Para referirnos a una propiedad anidada, usamos: "padre.hijo" : valorBusqueda
          .find({ "bookingDate.day": day })
          .then((response) => {
            return response;
          })
      );
    default:
      return bookingModel.find({ "bookingDate.day": day }).then((response) => {
        return response.filter((booking) => {
          return booking.bookingDate.hour === hour;
        });
      });
  }
}

function getAvailableBookings(owner, day, hour) {
  return getAllBookingsByDate(day, hour).then((allBookings) => {
    return getAllTablesByOwner(owner).then((tablesOfOwner) => {
      let availablesTable = [];
      allBookings.forEach((booking) => {
        booking.tablesInBooking.forEach((tableId) => {
          availablesTable = tablesOfOwner.filter((table) => {
            console.log(table._id, tableId);
            return table._id.valueOf() != tableId;
          });
        });
      });
      return availablesTable;
    });
  });
}

/**
 * EXPRESS SECTION
 */
export function getAllBookings(req, res) {
  return bookingModel.find().then((response) => {
    return res.json(response);
  });
}

// Get all bookings from one company!!!
export function getBookingsByToken(req, res) {
  return bookingModel
    .findOne({ bookingToken: req.params.bookingToken })
    .then((response) => {
      if (response === null) {
        return [];
      } else {
        return res.json(response);
      }
    });
}

export function addNewBooking(req, res) {
  if (!req.body.client) {
    return res.status(400).send({ error: 400, msg: "No pusiste un client" });
  }

  if (!req.body.owner) {
    return res.status(400).send({ error: 400, msg: "No pusiste un owner" });
  }

  if (!req.body.bookingDate) {
    return res.status(400).send({ error: 400, msg: "No pusiste un date" });
  }

  if (!req.body.tablesInBooking) {
    return res.status(400).send({ error: 400, msg: "No pusiste las tables" });
  }

  // getAvailableBookings(req.body.boddkingDate.day, hour, owner).then(
  //   (availablesTable) => {
  //     return availablesTable.some();
  //   }
  // );

  const newBooking = new bookingModel({
    client: req.body.client,
    owner: req.body.owner,
    bookingToken: humanId({
      separator: "-",
      capitalize: false,
      adjectives: ["pedrocd", "juancesar0", "maximodm", "deviluppercase"],
      nouns: ["erik", "pedrocamejo", "pedrort", "cesar"],
      //verbs: [""] //unused atm
    }),
    bookingDate: req.body.bookingDate,
    tablesInBooking: req.body.tablesInBooking,
  });
  newBooking.save();
  return res.json(newBooking);
}

export function getAvailableBookingsAPI(req, res) {
  return getAvailableBookings(
    req.params.owner,
    req.params.date,
    req.params.hour
  ).then((response) => res.json(response));
}
