// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";
const mongoose = require("mongoose");
const DB_NAME = require("../constants");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n mongodb connected. DB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Connection Failed:- ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
