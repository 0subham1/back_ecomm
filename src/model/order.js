const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    orderId: String,
    itemList: Array,
    userId: String,
    userName: String,
    totalAmount: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", schema);
