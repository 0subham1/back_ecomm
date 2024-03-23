const verifyToken = (req, res, next) => {
    const auth = req.headers["authorization"];
    if (!auth) return resHandler(res, 500, false, "no auth found");
    req.token = auth.split(" ")[1];
    next();
  };

  module.exports = verifyToken