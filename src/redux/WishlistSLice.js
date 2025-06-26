import { createSlice } from "@reduxjs/toolkit";
const whislistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addWishList(state, action) {
            const newWishlist = action.payload;
            console.log("ggg", newWishlist)
            const existingWishlist = state.find(item => item.id === newWishlist.id);

            if (existingWishlist) {
                existingWishlist.quantity = newWishlist.quantity || 1;
            }
            else {
                state.push({ ...newWishlist, quantity: 1 });

            }


        },
        removeWhislist: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
    }
}
)

export default whislistSlice.reducer;
export const { addWishList, removeWhislist } = whislistSlice.actions; 