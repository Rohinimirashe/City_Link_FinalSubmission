const bookingModel = require("../models/bookingModel");

async function createBooking(req, res) {
  try {
    const data = req.body;

    const booking = await bookingModel.create(data);

    const outPut = await bookingModel
      .findById(booking._id)
      .populate("customer")
      .populate("vendor");

    res.status(200).send({ status: true, message: outPut });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
}

module.exports = createBooking;