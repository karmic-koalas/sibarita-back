import bookingModel from "./booking.model.js";
import humanId from "../../lib/human-id/human-id.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: process.env.MAILSERVICE,
  auth: {
    user: process.env.MAILACCOUNT,
    pass: process.env.MAILPASS,
  },
});

async function getByToken(token) {
  const response = await bookingModel.findOne({ bookingToken: token });
  if (response === null) {
    return false;
  } else {
    return response;
  }
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
      "erikeah",
      "aschapira",
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
    textArea: req.body.textArea,
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

export async function getAllBookingsByOwner(req, res) {
  const response = await bookingModel.find({ owner: req.params.owner });
  if (response === null) {
    return [];
  } else {
    return res.json(response);
  }
}

export async function deleteSingleBookingByToken(req, res) {
  const token = req.params.bookingToken;
  const tokenToCheck = req.locals.userInfo;
  const authOwner = tokenToCheck.owner;
  const answer = await bookingModel.findOne({ bookingToken: token });
  if (answer.owner === authOwner) {
    const response = await bookingModel.deleteOne({ bookingToken: token });
    if (answer.contact.email != null) {
      const email = answer.contact.email;
      const mailOptions = {
        from: process.env.MAILACCOUNT,
        to: `${email}`,
        subject: `Reserva en ${answer.owner} Cancelada ???`,
        text:
          `??Hola! \n\n` +
          `Sentimos comunicarle que su reserva en ${answer.owner} para el d??a ${answer.bookingDate.day} con hora ${answer.bookingDate.hour} ha sido cancelada por el propietario.\n\n` +
          `Esperamos volver a verte pronto.`,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        }
      });
    }

    if (response === null) {
      return [];
    } else {
      return res.json(response);
    }
  } else {
    return res.status(400).json({ message: "No eres el due??o" });
  }
}

export async function findByTokenAndUpdate(req, res) {
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

  //const id = req.params._id.valueOf();
  const token = req.params.bookingToken;
  const tokenToCheck = req.locals.userInfo;
  const authOwner = tokenToCheck.owner;
  const answer = await bookingModel.findOne({ bookingToken: token });
  if (answer.owner === authOwner) {
    const response = await bookingModel.findOneAndUpdate({ bookingToken: token }, changes, {
      returnDocument: "after",
    });
    if (response === null) {
      return [];
    } else {
      return res.json(response);
    }
  } else {
    return res.status(400).json({ message: "No eres el due??o" });
  }
}
