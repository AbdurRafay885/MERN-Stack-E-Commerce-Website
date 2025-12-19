import axios from "axios";

export const getProducts = async (filters) => {
  const res = await axios.get("http://localhost:5000/api/products", {
    params: filters,
  });
  return res.data;
};