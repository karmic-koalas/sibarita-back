import mongoose from "mongoose";
const { Schema } = mongoose;

const numPersonValidate = (number) => {
  if (!number || number < 1 || typeof number !== "number") return false;
};

const clientValidate = (client) => {
  if (!client) return false;
};

const ownerValidate = (owner) => {
  if (!owner) return false;
};

const hourValidate = (hour) => {
  if (!hour) return false;
};

const dayValidate = (day) => {
  if (!day) return false;
};

const bookingSchema = Schema({
  client: {
    type: String,
    required: true,
    validate: [(client) => clientValidate(client), "El campo client es inválido."],
  },
  owner: {
    type: String,
    required: true,
    validate: [(owner) => ownerValidate(owner), "El campo owner es inválido."],
  },
  bookingToken: {
    type: String,
    required: true,
  },
  bookingDate: {
    day: {
      type: String,
      required: true,
      validate: [(day) => dayValidate(day), "El campo día es inválido."],
    },
    hour: {
      type: String,
      required: true,
      validate: [(hour) => hourValidate(hour), "El campo hora es inválido."],
    },
  },
  //tablesInBooking: [String],
  numPerson: {
    type: Number,
    required: true,
    validate: [
      (numPerson) => numPersonValidate(numPerson),
      "El campo numero de personas es inválido.",
    ],
  },
});

const booking = mongoose.model("bookings", bookingSchema);

export default booking;
