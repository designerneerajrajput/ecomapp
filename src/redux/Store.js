import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './Slice';
import whislistSlice from './WishlistSLice';
import productSlice from './productSlice'

const store = configureStore({
    reducer: {
        cart: cartSlice,
        wishlist: whislistSlice,
        product: productSlice
    },

});

export default store;