const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    Mobile: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("customer", userSchema);
