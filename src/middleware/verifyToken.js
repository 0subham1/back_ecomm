const resHandler = require("./resHandler");

const verifyToken = (req, res, next) => {
  const auth = req.headers["authorization"];
  console.log("authhhh", auth);
  if (auth) {
    req.token = auth.split(" ")[1];
    next();
  } else {
    return resHandler(res, 500, false, "no auth found");
  }
};

module.exports = verifyToken;
