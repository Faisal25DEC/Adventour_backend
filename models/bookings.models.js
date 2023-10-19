const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  bookedTill: { type: Number, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  duration: { type: Number, required: true },
  guests: { type: Number, required: true },
  name: { type: String, required: true },
  info: { type: String, required: true },
  location: { type: String, required: true },
  images: { type: String, required: true },
  trending: { type: Boolean, required: true },
  recommended: { type: Boolean, required: true },
  price: { type: Number, required: true },
  state: { type: String, required: true },
  ratings: { type: Number, required: true },
  id: { type: Number, required: true },
  userId: { type: String, required: true },
});

const bookingModel = mongoose.model("booking", bookingSchema);

module.exports = { bookingModel };
