const mongoose = require("mongoose");

const uri =
  "mongodb+srv://faizaljohnson25dec:faisal@cluster0.utjpulc.mongodb.net/adventour-backend";

const mongoDbConnection = mongoose.connect(uri);

module.exports = mongoDbConnection;
