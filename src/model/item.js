const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    info: {
      type: String,
    },
    img: {
      type: String,
    },
    category: {
      type: Object, 
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("book", itemSchema);
