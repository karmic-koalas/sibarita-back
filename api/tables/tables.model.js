import mongoose from "mongoose";
const { Schema } = mongoose;

const tablesSchema = Schema({
  owner: String,
  size: Int,
});

const tables = mongoose.model("tables", tablesSchema);

export default tables;
