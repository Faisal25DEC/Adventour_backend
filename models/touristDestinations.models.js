const mongoose = require("mongoose");

const touristDestinationsSchema = mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  info: { type: String, required: true },
  images: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  ratings: { type: Number, required: true },
  recommended: { type: Boolean, required: true },
  trending: { type: Boolean, required: true },
  state: { type: String, required: true },
  duration: { type: Number, required: true },
});

const touristDestinationsModel = mongoose.model(
  "touristDestinations",
  touristDestinationsSchema
);

module.exports = { touristDestinationsModel };
