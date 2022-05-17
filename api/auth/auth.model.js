import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  owner: {
    type: String,
    unique: true,
  },
});

const authModel = new mongoose.model("users", schema);
export default authModel;
