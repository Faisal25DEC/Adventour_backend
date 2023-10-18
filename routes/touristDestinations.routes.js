const express = require("express");
const {
  touristDestinationsModel,
} = require("../models/touristDestinations.models");
const {
  checkPagination,
  checkSort,
  checkFilter,
} = require("../middlewares/touristDestinations/touristDestinations.middlewares");

const touristDestinationsRouter = express.Router();

touristDestinationsRouter.get(
  "/",
  checkPagination,
  checkSort,
  checkFilter,

  async (req, res) => {
    try {
      res.send(req.resTDs);
    } catch (err) {
      console.log(err);
      res.send({ msg: "Internal server error" });
    }
  }
);

touristDestinationsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const touristDestination = await touristDestinationsModel.findOne({ id: id });
  res.send(touristDestination);
});

module.exports = { touristDestinationsRouter };
