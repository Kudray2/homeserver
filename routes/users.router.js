import express from "express";

export const usersRouter = express.Router();

usersRouter
  .route("/")
  .get((_, res) => {
    res.json({ userName: "test2" });
  })
  .post((req, res) => {
    res.sendStatus(resText);
    //
  });
