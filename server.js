import "dotenv/config";
import process from "process";
import express from "express";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.USERNAME_DB +
      ":" +
      process.env.PASSWORD_DB +
      "@sibarita.v89gs.mongodb.net/sibarita?retryWrites=true&w=majority"
  )
  .catch((err) => console.log("Bad Mongo Connection:" + err));

// IMPORTANT: Using ES6 you must use .js extension to import.
import companyRouter from "./api/company/index.js";
// import tableRouter from "./api/table/index.js";
// import { router as bookingRouter } from "./api/booking/index.js";

const app = express();

app.use(express.json());

app.use("/api/companies", companyRouter);
// app.use("/api/table", tableRouter);
// app.use("/api/booking", bookingRouter);

app.listen(3000);
