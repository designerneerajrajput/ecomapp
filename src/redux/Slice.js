import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const newItem = action.payload;


            const existingItem = state.find(item => item.id === newItem.id);

            if (existingItem) {


                existingItem.quantity = newItem.quantity ? newItem.quantity : 1;
            } else {
                // Add the item with an initial quantity
                state.push({ ...newItem, quantity: newItem.quantity });
            }
        },


        removeCart: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        clearCart: () => {
            return [];
        },
        increment: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            } else {
                console.error(`Item with id ${action.payload} not found`);
            }
        },
        decrement: (state, action) => {
            const item = state.find(item => item.id === action.payload);

        },

        // addWishlist: (state, action) => {
        //     const newItem = action.payload;
        //     console.log('teeee', newItem);

        //     const existingItem = state.find(item => item.id === newItem.id);

        //     if (existingItem) {


        //         existingItem.quantity = newItem.quantity ? newItem.quantity : 1;
        //     } else {
        //         // Add the item with an initial quantity
        //         state.push({ ...newItem, quantity: newItem.quantity });
        //     }
        // },


    },
});

export const { addCart, removeCart, clearCart, increment, decrement, addtoCheck, addWishlist } = cartSlice.actions;
export default cartSlice.reducer;
