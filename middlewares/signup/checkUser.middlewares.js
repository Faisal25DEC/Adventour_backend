const { userModel } = require("../../models/users.models");

const checkUser = async (req, res, next) => {
  const { email, googleSignIn } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    if (googleSignIn) res.send(user);
    else res.status(400).send({ msg: "User Already Exists" });
  } else next();
};

module.exports = { checkUser };
