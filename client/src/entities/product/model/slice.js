import {createSlice} from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        favourites: [],
        isLoading: false,
        error: ''
    },
    reducers: {
        productsFetching(state) {
            state.isLoading = true;
        },
        productsFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = '';
            state.products = action.payload;
        },
        productsFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default productsSlice.reducer;
export const {
    productsFetching,
    productsFetchingSuccess,
    productsFetchingError
} = productsSlice.actions
