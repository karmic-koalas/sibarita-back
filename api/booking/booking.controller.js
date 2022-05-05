import bookingModel from "./booking.model.js";
import { getAllTablesByOwner } from "../tables/tables.controller.js";

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
