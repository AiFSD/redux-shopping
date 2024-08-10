// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import quantityReducer from './QuantitySlice';

export const store = configureStore({
  reducer: {
    quantity: quantityReducer,
  },
});
