const express = require("express");
const customer = require("../controllers/customerController");
const vendor = require("../controllers/vendorController");
const booking = require("../controllers/bookingController");
const router = express.Router();

router.post("/customer", customer);

router.post("/vendor", vendor);

router.post("/book", booking);

module.exports = router;
