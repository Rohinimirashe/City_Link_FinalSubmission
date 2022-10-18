const vendorModel = require("../models/vendorModel");

async function createVendor(req, res) {
  try {
    const data = req.body;
    const outPut = await vendorModel.create(data);
    return res.status(201).send({ status: true, message: outPut });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: false, message: err.message });
  }
}

module.exports = createVendor;
