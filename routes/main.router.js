import express from "express";
import { usersRouter } from "./users.router.js";

export const mainRouter = express().use("/users", usersRouter);
