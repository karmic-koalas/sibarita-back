import mongoose from "mongoose";
const { Schema } = mongoose;

//////////////////////////////////////////////////////
//////          Validation Functions           //////
////////////////////////////////////////////////////
const numPersonValidate = (number) => {
  if (!number || number < 1 || typeof number !== "number") return false;
};

const clientValidate = (client) => {
  if (!client) return false;
};

const phoneValidate = (phone) => {
  if (!phone || (phone.length > 8 && phone.length < 10) || typeof phone !== "number") return false;
}

const emailValidate = (email) => {
  const emailRegex = new RegExp("^[a-zA-Z0-9+_.-]+\@+[a-zA-Z0-9.-]+\.+[a-z]\{2,}$", "g");
  if (emailRegex.test(email)) return true;
  return false;
  
}

const ownerValidate = (owner) => {
  if (!owner) return false;
};

const hourValidate = (hour) => {
  if (!hour) return false;
};

const dayValidate = (day) => {
  if (!day) return false;
};

const textAreaValidate = (textArea) => {
  if (textArea.length > 140) return false;
}
///////////////////////////////////////////////////

const bookingSchema = Schema({
  client: {
    type: String,
    required: true,
    validate: [(client) => clientValidate(client), "El campo client es inválido o está vacío."],
  },
  contact: {
    phone: {
      type: Number,
      required: true,
      validate: [(phone) => phoneValidate(phone), "El campo phone es inválido o está vacío."]
    },
    email: {
      type: String,
      required: false,
      validate: [(email) => emailValidate(email), "El campo email es inválido."]
    }
  },
  owner: {
    type: String,
    required: true,
    validate: [(owner) => ownerValidate(owner), "El campo owner es inválido o está vacío."],
  },
  bookingToken: {
    type: String,
    required: true,
    // El validation de aquí se hará desde el middleware para poder reutilizarlo en otras rutas/cosas.
  },
  bookingDate: {
    day: {
      type: String,
      required: true,
      validate: [(day) => dayValidate(day), "El campo día es inválido o está vacío."],
    },
    hour: {
      type: String,
      required: true,
      validate: [(hour) => hourValidate(hour), "El campo hora es inválido o está vacío."],
    },
  },
  textArea: {
    type: String,
    required: false,
    validate: [(textArea) => textAreaValidate(textArea), "El textArea no puede superar los 140 caracteres."]
  },
  //tablesInBooking: [String],
  numPerson: {
    type: Number,
    required: true,
    validate: [
      (numPerson) => numPersonValidate(numPerson),
      "El campo numero de personas es inválido o está vacío.",
    ],
  },
});

const booking = mongoose.model("bookings", bookingSchema);

export default booking;
