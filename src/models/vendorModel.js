const mongoose = require("mongoose");
const vendorSchema = new mongoose.Schema(
  {
    fullName: { type: String },
    vehicleNumber: { type: String },
    vehicleModel: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("vendor", vendorSchema);
