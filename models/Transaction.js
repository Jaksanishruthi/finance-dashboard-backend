const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  amount: Number,
  type: {
    type: String,
    enum: ["income", "expense"],
  },
  category: String,
  date: {
    type: Date,
    default: Date.now,
  },
  note: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);