const express = require("express");
const router = express.Router();
const { getCart, updateCart } = require("../controllers/cartController");

router.get("/", getCart);
router.post("/", updateCart);

module.exports = router;
