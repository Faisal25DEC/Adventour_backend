//imports
const express = require("express");
const mongoDbConnection = require("./config/db");
const cors = require("cors");
const {
  touristDestinationsRouter,
} = require("./routes/touristDestinations.routes");
const { userRouter } = require("./routes/users.routes");
const bookingRouter = require("./routes/bookings.routes");
const app = express();

require("dotenv").config();
//port
const port = 8080;

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ msg: "Adventour API" });
});

//touristDestinationsRouter
app.use("/touristDestinations", touristDestinationsRouter);
app.use("/users", userRouter);
app.use("/bookings", bookingRouter);

app.listen(port, async () => {
  try {
    await mongoDbConnection;
    console.log("Server started on ", port);
    console.log("Database Connected");
  } catch (err) {
    console.log(err);
  }
});
