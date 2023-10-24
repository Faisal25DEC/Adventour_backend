const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;

const mongoDbConnection = mongoose.connect(uri);

module.exports = mongoDbConnection;
