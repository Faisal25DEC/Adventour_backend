const jwt = require("jsonwebtoken");
const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.substring(7);
    jwt.verify(token, "secretkey", (err, decoded) => {
      if (err) {
        res.status(400).send({ msg: "user not logged in" });
      } else {
        req.userId = decoded.userId;
        next();
      }
    });
  } catch (err) {}
};

module.exports = { authenticate };
