import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      // A product is only added once from the listing page.
      if (!existingItem) {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    increaseQuantity(state, action) {
      const item = state.items.find((product) => product.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((product) => product.id === action.payload);
      if (!item) return;

      if (item.quantity <= 1) {
        state.items = state.items.filter((product) => product.id !== action.payload);
      } else {
        item.quantity -= 1;
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((product) => product.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
