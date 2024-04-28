import { configureStore } from '@reduxjs/toolkit'
import  ProductReducer  from '../features/Product/ProductSlice'
import CartSlice from './Cart/CartSlice'
export const store = configureStore({
  reducer: {
    ProductReducer,
    CartSlice
  },
})

