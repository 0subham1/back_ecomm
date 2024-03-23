const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    bookList: Array,
    userId: String,
    userName: String,
    total: Number,
    orderId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", schema);
