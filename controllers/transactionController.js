const Transaction = require("../models/Transaction");

// CREATE
exports.createTransaction = async (req, res) => {
  try {
    const { amount, type, category, note } = req.body;

    const transaction = await Transaction.create({
      amount,
      type,
      category,
      note,
      createdBy: req.user._id,
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate("createdBy", "name email");
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ message: "Not found" });
    }

    Object.assign(transaction, req.body);
    await transaction.save();

    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ message: "Not found" });
    }

    await transaction.deleteOne();

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};