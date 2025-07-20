const jwt = require("jsonwebtoken");

const generateToken = (id, isAdmin, isTrainer) => {
  return jwt.sign({ id, isAdmin, isTrainer }, process.env.JWT_SECRET, {
    expiresIn: "30d", // Token 30 gün geçerli olacak
  });
};

module.exports = generateToken;
