import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCartFromDB, saveCartToDB } from "../services/cartService";

export const initializeCartFromDB = createAsyncThunk(
  "cart/init",
  async () => {
    return await fetchCartFromDB();
  }
);

const initialState = {
  cartItems: [],
  status: "idle",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const incoming = action.payload;
      const id = incoming._id || incoming.id;

      const item = state.cartItems.find((i) => i.id === id);

      if (item) item.qty += 1;
      else state.cartItems.push({ ...incoming, id, qty: 1 });

      saveCartToDB(state.cartItems);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i) => i.id !== action.payload
      );
      saveCartToDB(state.cartItems);
    },

    increaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
      saveCartToDB(state.cartItems);
    },

    decreaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
      saveCartToDB(state.cartItems);
    },

    clearCart: (state) => {
      state.cartItems = [];
      saveCartToDB([]);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeCartFromDB.pending, (state) => {
        state.status = "loading";
      })
      .addCase(initializeCartFromDB.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = action.payload.map((i) => ({
          ...i,
          id: i.product,
        }));
      });
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
