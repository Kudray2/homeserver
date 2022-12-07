import express from "express";
import { mongoConnect } from "./helpers/dbConnect.js";
import { mainRouter } from "./routes/main.router.js";

const app = express();

app.use(express.json());
app.use("/", mainRouter);

mongoConnect();
app.listen(7000, () => console.log("server started"));
