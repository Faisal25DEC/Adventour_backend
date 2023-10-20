const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/users.models");
const { checkUser } = require("../middlewares/signup/checkUser.middlewares");
const { authenticate } = require("../middlewares/authentication/authenticate");

const userRouter = express.Router();
//push
userRouter.get("/", authenticate, async (req, res) => {
  try {
    const userId = req.userId;
    const user = await userModel.findOne({ _id: userId });
    if (user) {
      console.log(user);
      res.send(user);
    } else {
      res.send({ msg: "User Does Not Exist" });
    }
  } catch (err) {
    res.send({ msg: "Error Verifying User" });
  }
});

userRouter.post("/signup", checkUser, (req, res) => {
  const { name, email, password, googleSignIn } = req.body;
  bcrypt.hash(password, 10, async function (err, hash) {
    if (err) {
      res.status(400).send("bad request");
    }
    try {
      await userModel.create({ name, email, password: hash });
      res.status(200).send("user created");
    } catch (err) {
      res.send({
        msg: "Error creating user",
        reason: "You might have missed a field",
      });
    }
  });
});
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        res.status(400).send("bad request");
      }
      if (!result) res.status(400).send({ msg: "Invalid Credentials" });
      else {
        const token = jwt.sign({ userId: user._id }, "secretkey");
        console.log(token);
        res.send({ msg: "login successful", token: token });
      }
    });
  } else {
    res.status(401).send("user not found");
  }
});

module.exports = { userRouter };
