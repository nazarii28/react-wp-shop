import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./features/cartSlice";
import productsReducer from "./features/productsSlice";
import categoriesReducer from "./features/categoriesSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        categories: categoriesReducer
    }
})