import axios from "axios";

const API_URL = "http://localhost:5000/api/cart";

export const fetchCartFromDB = async () => {
  const res = await axios.get(API_URL);
  return res.data.items;
};

export const saveCartToDB = async (cartItems) => {
  const items = cartItems.map((item) => ({
    product: item.id,
    name: item.name,
    price: item.price,
    qty: item.qty,
    image: item.image,
  }));

  await axios.post(API_URL, { items });
};
