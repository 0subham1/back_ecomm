const router = require("express").Router();
const ORDER = require("../model/order");
const USER = require("../model/user");
const ITEM = require("../model/item");

const resHandler = require("../middleware/resHandler");
//res, code, isSuccess, msg, data
//CRUD

router.post("/orderCreate", async (req, res) => {
  try {
    let orderList = await ORDER.find();
    let orderKey = "order_" + (orderList.length + 1);

    const user = await USER.findById(req?.body?.userId);

    let itemListErr = false;
    req?.body?.itemList?.map((a) => {
      if (!a.name) {
        itemListErr = true;
        return resHandler(res, 400, false, "invalid item name");
      }
      if (a.qty == 0) {
        itemListErr = true;
        return resHandler(res, 400, false, "invalid item qty");
      }
    });

    if (!req.body?.userName)
      return resHandler(res, 400, false, "userName empty");
    if (!req.body?.totalAmount || req.body?.totalAmount == 0)
      return resHandler(res, 400, false, "invalid totalAmount ");

    let data = {
      orderId: orderKey,
      itemList: req?.body?.itemList,
      userId: req?.body?.userId,
      userName: req?.body?.userName,
      totalAmount: req?.body?.totalAmount,
    };
    if (!itemListErr) {
      let result = await ORDER.create(data);
      resHandler(res, 200, true, "Order Created", result);
    }
  } catch (err) {
    resHandler(res, 500, false, "Error Placing Order", err);
  }
});

router.get("/orderList", async (req, res) => {
  try {
    let items = await ORDER.find();
    resHandler(res, 200, true, "orderlist", items);
  } catch (err) {
    resHandler(res, 500, false, "internal server error", err);
  }
});

router.get("/:_id/orderById", async (req, res) => {
  try {
    let orderById = await ORDER.findOne(req.params);
    resHandler(res, 200, true, "orderById", orderById);
  } catch (err) {
    resHandler(res, 400, false, "order not found");
  }
});

router.get("/:_id/orderByUserId", async (req, res) => {
  try {
    let orderByUser = await ORDER.find({ userId: req.params });
    resHandler(res, 200, true, "orderByUserId", orderByUser);
  } catch (err) {
    resHandler(res, 400, false, "order not found");
  }
});

router.delete("/:_id/orderDelete", async (req, res) => {
  try {
    const order = await ORDER.findOne(req.params);
    let result = await ORDER.deleteOne(req.params);
    if (result?.deletedCount > 0) {
      resHandler(res, 200, true, "order deleted", order);
    } else {
      resHandler(res, 200, true, "order not deleted");
    }
  } catch (err) {
    resHandler(res, 400, false, "order not found");
  }
});
module.exports = router;
