import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        busyProduct(state, action) {
            return action.payload; // Set the product for "Buy Now"

        }
    }
})
export default ProductSlice.reducer
export const { busyProduct } = ProductSlice.actions