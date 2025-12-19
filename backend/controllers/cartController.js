const Cart = require("../models/Cart");

const DEMO_USER_ID = "guest_user_123";

// GET CART
exports.getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: DEMO_USER_ID });

    if (!cart) {
      cart = await Cart.create({ userId: DEMO_USER_ID, items: [] });
    }

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart" });
  }
};

// UPDATE CART
exports.updateCart = async (req, res) => {
  const { items } = req.body;

  if (!Array.isArray(items)) {
    return res.status(400).json({ message: "Invalid items format" });
  }

  try {
    const cart = await Cart.findOneAndUpdate(
      { userId: DEMO_USER_ID },
      { items },
      { new: true, upsert: true }
    );

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: "Error updating cart" });
  }
};
