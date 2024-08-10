
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quantity: 0,
  totalPrice: 0,
};

const quantitySlice = createSlice({
  name: 'quantity',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.quantity += 1;
      state.totalPrice = state.quantity * action.payload.price;
    },
    decrement: (state, action) => {
      if (state.quantity > 0) {
        state.quantity -= 1;
        state.totalPrice = state.quantity * action.payload.price;
      }
    },
  },
});

export const { increment, decrement } = quantitySlice.actions;
export default quantitySlice.reducer;

