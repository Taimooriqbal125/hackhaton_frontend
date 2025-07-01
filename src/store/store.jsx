import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from '../Slices/exampleSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export default store;
