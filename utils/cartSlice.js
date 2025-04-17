import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const itemInCart = state.items.find((i) => i.id === item.id);
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    increaseItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) item.quantity += 1;
    },
    decreaseItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== id);
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, clearCart, increaseItem, decreaseItem } =
  cartSlice.actions;
export default cartSlice.reducer;
