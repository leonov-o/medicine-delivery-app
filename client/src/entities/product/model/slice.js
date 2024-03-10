import {createSlice} from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        favourites: [],
        cart: [],
        coupon: '',
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
        },
        addToCart(state, action) {
            const alreadyAdded = state.cart.find(product => product._id === action.payload._id);
            if (alreadyAdded) {
                alreadyAdded.quantity += 1;
            }else{
                state.cart.push(action.payload);
            }
        },
        changeQuantity(state, action) {
            const product = state.cart.find(product => product._id === action.payload._id);
            if (product) {
                product.quantity = action.payload.quantity;
            }
        },
        setCoupon(state, action) {
            state.coupon = action.payload;
        },
        deleteFromCart(state, action) {
            state.cart = state.cart.filter(product => product._id !== action.payload);
        },
        resetCart(state) {
            state.cart = [];
        },
        addToFavourites(state, action) {
            state.favourites.push(action.payload);
        },
        deleteFromFavourites(state, action) {
            state.favourites = state.favourites.filter(product => product._id !== action.payload);
        }
    }
});

export default productsSlice.reducer;
export const {
    productsFetching,
    productsFetchingSuccess,
    productsFetchingError,
    addToCart,
    resetCart,
    setCoupon,
    changeQuantity,
    deleteFromCart,
    addToFavourites,
    deleteFromFavourites
} = productsSlice.actions
