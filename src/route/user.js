const router = require("express").Router();
const USER = require("../model/user");
const resHandler = require("../middleware/resHandler");

const bcrypt = require("bcrypt");
const verifyToken = require("../middleware/verifyToken");
const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_KEY;

//res, code, isSuccess, msg, data
//CRUD

router.post("/create", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);
    let exist = await USER.findOne({
      name: req.body?.name.trim().toLowerCase(),
    });

    if (exist) {
      resHandler(res, 400, false, "user already exist");
    } else {
      if (!req.body?.name) return resHandler(res, 400, false, "name empty");
      if (!Number(req.body?.phone))
        return resHandler(res, 400, false, "phone empty");
      if (!req.body?.password)
        return resHandler(res, 400, false, "password empty");
      if (req.body.name.includes("  "))
        return resHandler(res, 400, false, "too many spaces", "");
      let data = {
        name: req.body.name.trim().toLowerCase(),
        phone: Number(req.body.phone),
        password: hashPass,
      };
      let result = await USER.create(data);
      resHandler(res, 200, true, "user created", result);
    }
  } catch (err) {
    resHandler(res, 500, false, "internal server error", err);
  }
});

router.get("/list", async (req, res) => {
  try {
    USER.find()
      .then((users) => {
        resHandler(res, 200, true, "userlist", users);
      })
      .catch((err) => {
        resHandler(res, 500, false, err);
      });
  } catch (err) {
    resHandler(res, 500, false, "internal server error", err);
  }
});
router.get("/get/:_id", async (req, res) => {
  try {
    const user = await USER.findById(req.params);
    resHandler(res, 200, true, "user found", user);
  } catch (err) {
    resHandler(res, 400, false, "user not found");
  }
});

// router.get("/getUser/:_id", async (req, res) => {
//   await USER.findOne(req.params)
//     .then((user) => {
//       resHandler(res, 200, true, "user found", user);
//     })
//     .catch((err) => {
//       resHandler(res, 400, false, "user not found");
//     });
// });

router.put("/edit/:_id", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req?.body?.password, salt);
    if (!req.body?.name) return resHandler(res, 400, false, "name empty");
    if (!Number(req.body?.phone))
      return resHandler(res, 400, false, "phone empty");
    if (!req.body?.password)
      return resHandler(res, 400, false, "password empty");
    if (req.body.name.includes("  "))
      return resHandler(res, 400, false, "too many spaces", "");
    let data = {
      name: req?.body?.name.trim().toLowerCase(),
      phone: Number(req?.body?.phone),
      password: hashPass,
    };
    console.log(data, "data");
    let result = await USER.updateOne(req.params, { $set: data });

    // let result = await USER.findByIdAndUpdate(req.params, data);
    resHandler(res, 200, true, "user updated", result);
  } catch (err) {
    resHandler(res, 400, false, "user not found");
  }
});

router.delete("/delete/:_id", async (req, res) => {
  try {
    const user = await USER.findOne(req.params);
    let result = await USER.deleteOne(req.params);
    if (result?.deletedCount > 0) {
      resHandler(res, 200, true, "user deleted", user);
    } else {
      resHandler(res, 200, true, "user not deleted");
    }
  } catch (err) {
    resHandler(res, 400, false, "user not found");
  }
});

router.post("/login", async (req, res) => {
  try {
    if (!req.body?.name) return resHandler(res, 400, false, "name empty");
    if (!req.body?.password)
      return resHandler(res, 400, false, "password empty");

    const user = await USER.findOne({ name: req.body.name });
    if (!user) return resHandler(res, 400, false, "user not found");

    const validPass = await bcrypt.compare(req.body.password, user.password);

    if (validPass) {
      jwt.sign({ user }, jwtKey, (err, token) => {
        if (err) {
          resHandler(res, 400, false, "token not generated", err);
        } else {
          resHandler(res, 200, false, "login successful", { user, token });
        }
      });
    } else {
      resHandler(res, 400, false, "wrong password");
    }
  } catch (err) {
    resHandler(res, 500, false, "internal server error", err);
  }
});

router.post("/generateToken", async (req, res) => {
  try {
    let data = {
      name: req.body.name,
      password: req.body.password,
    };

    jwt.sign(data, jwtKey, (err, token) => {
      if (err) {
        resHandler(res, 400, false, "token not generated", err);
      } else {
        resHandler(res, 200, false, "token  generated", { token });
      }
    });
  } catch (err) {
    resHandler(res, 500, false, "internal server error", err);
  }
});

router.post("/validateToken", verifyToken, async (req, res) => {
  try {
    let jwtKey = process.env.JWT_KEY;
    jwt.verify(req.token, jwtKey, (err, authData) => {
      if (err) {
        resHandler(res, 403, false, "auth fail", err);
      } else {
        resHandler(res, 200, true, "auth success", authData);
      }
    });
  } catch (err) {
    resHandler(res, 500, false, "internal server error validateToken", err);
  }
});

module.exports = router;
