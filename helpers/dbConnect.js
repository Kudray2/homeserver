import mongoose from "mongoose";
import { MONGO_URI } from "../config/dbConfig.js";

export function mongoConnect() {
  // add the following to prepare for mongoose 7 and prevent warning at script starts
  mongoose.set("strictQuery", true);
  mongoose.connect(MONGO_URI, (error) => {
    if (error) console.error("ERROR++>", error);
    console.log("Mongo connected");
  });
}
