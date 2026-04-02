const Transaction = require("../models/Transaction");

// SUMMARY
exports.getSummary = async (req, res) => {
  try {
    const income = await Transaction.aggregate([
      { $match: { type: "income" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const expense = await Transaction.aggregate([
      { $match: { type: "expense" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const totalIncome = income[0]?.total || 0;
    const totalExpense = expense[0]?.total || 0;

    res.json({
      totalIncome,
      totalExpense,
      netBalance: totalIncome - totalExpense,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CATEGORY-WISE
exports.getCategoryWise = async (req, res) => {
  try {
    const data = await Transaction.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};