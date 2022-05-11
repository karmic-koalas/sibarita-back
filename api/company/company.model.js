import mongoose from "mongoose";
const { Schema } = mongoose;

const companySchema = Schema({
  owner: String,
  nickname: String,
  description: String,
  contact: {
    phone: Number,
    email: String,
  },
});

const companies = mongoose.model("companies", companySchema);

export default companies;
