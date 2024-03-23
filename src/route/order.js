const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();

app.use(express.json());
app.use(cors());

const ORDER = require("../db/ordersModel");

router.get("/orders", async (req, res) => {
  let result = await ORDER.find();
  res.send(result);
});

router.get("/orders/:_id", async (req, res) => {
  let result = await ORDER.findOne(req.params);
  res.send(result);
});

router.get("/userOrders/:_id", async (req, res) => {
  let result = await ORDER.find({ userId: req.params });
  res.send(result);
});

router.post("/addOrder", async (req, res) => {
  let orderList = await orders.find();
  let orderKey = "ORDER_" + (orderList.length + 1);
  let obj = { ...req.body, orderId: orderKey };
  let result = await new ORDER(obj).save();
  res.send(result);
});

//admin
router.delete("/deleteOrder/:_id", async (req, res) => {
  let result = await ORDER.deleteOne(req.params);
  res.send(result);
});
module.exports = router;
