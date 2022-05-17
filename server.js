import "dotenv/config";
// ??
import process from "process";
// Para poder contestar a las llamadas del front.
import express from "express";
// Para llamar a la base de datos de MongoDB.
import mongoose from "mongoose";
// Para el fallo de CORS
import cors from "cors";

// Conexión a base de datos con login.
mongoose
  .connect(
    "mongodb+srv://" +
      process.env.USERNAME_DB +
      ":" +
      process.env.PASSWORD_DB +
      "@sibarita.v89gs.mongodb.net/sibarita?retryWrites=true&w=majority"
  )
  .catch((err) => console.log("Bad Mongo Connection:\n" + err));

// IMPORTANT: Using ES6 you must use .js extension to import.
import companyRouter from "./api/company/index.js";
import bookingRouter from "./api/booking/index.js";
import authRouter from "./api/auth/index.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// Dirección de cada enrutamiento y a donde te lleva.
app.use("/companies", companyRouter);
app.use("/bookings", bookingRouter);
app.use("/auth", authRouter);

// Puerto al que conectas el servidor.
app.listen(3000);
