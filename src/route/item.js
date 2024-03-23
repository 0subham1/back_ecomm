const router = require("express").Router();
const ITEM = require("../model/item");
const resHandler = require("../middleware/resHandler");

//res, code, isSuccess, msg, data

router.post("/item/create", async (req, res) => {
  try {
    let exist = await ITEM.findOne({ name: req?.body?.name });
    if (exist) {
      resHandler(res, 400, false, "item already exist");
    } else {
      if (!req.body?.name) return resHandler(res, 400, false, "name empty");
      if (!req.body?.price) return resHandler(res, 400, false, "price empty");
      if (!req.body?.info) return resHandler(res, 400, false, "info empty");
      if (!req.body?.category?.value)
        return resHandler(res, 400, false, "category empty");

      let data = {
        name: req?.body?.name,
        price: Number(req?.body?.price),
        category: req?.body?.category,
      }; 
      
      let result = await ITEM.create(data);
      resHandler(res, 200, true, "item created", result);
    }
  } catch (err) {
    resHandler(res, 500, false, "internal server error", err);
  }
});

module.exports = router;
