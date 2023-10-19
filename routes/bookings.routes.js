const express = require("express");
const { authenticate } = require("../middlewares/authentication/authenticate");
const { bookingModel } = require("../models/bookings.models");

const bookingRouter = express.Router();

bookingRouter.get("/", authenticate, async (req, res) => {
  const userId = req.userId;
  try {
    const bookings = await bookingModel.find({ userId });
    console.log(bookings);
    res.send(bookings);
  } catch (err) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

bookingRouter.post("/post", authenticate, async (req, res) => {
  const userId = req.userId;
  console.log("booking");
  const payload = req.body;
  await bookingModel.create({ ...payload, userId });
  res.send("booking added");
});

module.exports = bookingRouter;
