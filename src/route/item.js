const router = require("express").Router();
const ITEM = require("../model/item");
const resHandler = require("../middleware/resHandler");

//res, code, isSuccess, msg, data
//CRUD

router.post("/itemCreate", async (req, res) => {
  try {
    let exist = await ITEM.findOne({
      name: req?.body?.name.trim().toLowerCase(),
    });
    if (exist) {
      resHandler(res, 400, false, "item already exist");
    } else {
      if (!req.body?.name) return resHandler(res, 400, false, "name empty");
      if (!req.body?.price) return resHandler(res, 400, false, "price empty");
      if (!req.body?.category?.value)
        return resHandler(res, 400, false, "category empty");
      let data = {
        name: req?.body?.name.trim().toLowerCase(),
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
router.get("/itemList", async (req, res) => {
  try {
    ITEM.find()
      .then((items) => {
        resHandler(res, 200, true, "itemlist", items);
      })
      .catch((err) => {
        resHandler(res, 500, false, err);
      });
  } catch (err) {
    resHandler(res, 500, false, "internal server error", err);
  }
});

router.get("/:_id/itemById", async (req, res) => {
  try {
    const item = await ITEM.findById(req.params);
    // const item = await ITEM.findOne(req.params)
    resHandler(res, 200, true, "item found", item);
  } catch (err) {
    resHandler(res, 400, false, "item not found");
  }
});
router.put("/:_id/itemEdit", async (req, res) => {
  try {
    if (!req.body?.name) return resHandler(res, 400, false, "name empty");
    if (!req.body?.price) return resHandler(res, 400, false, "price empty");
    if (!req.body?.category?.value)
      return resHandler(res, 400, false, "category empty");
    let data = {
      name: req?.body?.name.trim().toLowerCase(),
      price: Number(req?.body?.price),
      category: req?.body?.category,
    };

    let result = await ITEM.updateOne(req.params, { $set: data });

    resHandler(res, 200, true, "item updated", result);
  } catch (err) {
    resHandler(res, 500, false, "internal server error", err);
  }
});

router.delete("/:_id/itemDelete", async (req, res) => {
  try {
    const item = await ITEM.findOne(req.params);
    let result = await ITEM.deleteOne(req.params);
    if (result?.deletedCount > 0) {
      resHandler(res, 200, true, "item deleted", item);
    } else {
      resHandler(res, 200, true, "item not deleted");
    }
  } catch (err) {
    resHandler(res, 400, false, "item not found");
  }
});

module.exports = router;
