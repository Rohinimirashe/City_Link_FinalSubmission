const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const BookingSchema = new mongoose.Schema(
  {
    context: {
      type: String,
    },
    type: {
      type: String,
    },

    source: {
      type: String,
    },

    status: {
      type: String,
      enum: ["Confirmed", "cancel"],
    },

    customer: {
      type: ObjectId,
      ref: "customer",
    },
    source: {
      name: { type: String },
      address: {
        address: {
          type: String,
        },
        location: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: String },
        country: { type: String },
      },
      latitude: { type: String },
      longitude: { type: String },
    },
    destination: {
      name: { type: String },
      address: {
        address: { type: String },
        location: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: String },
        country: { type: String },

        coordinates: {
          latitude: { type: String },
          longitude: { type: String },
        },
      },
    },
    vendor: {
      type: ObjectId,
      ref: "vendor",
    },
    bookingTime: { type: String },
    pickupTime: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("booking", BookingSchema);
