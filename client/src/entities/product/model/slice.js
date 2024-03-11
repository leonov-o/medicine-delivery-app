import {createSlice} from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name: "products",
    initialState: {
        sortBy: null,
        products: [],
        favourites: localStorage.favourites && localStorage.favourites.length > 0 ? JSON.parse(localStorage.favourites) : [],
        cart: localStorage.cart && localStorage.cart.length > 0 ? JSON.parse(localStorage.cart) : [],
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
            state.products = action.payload.sort((a, b) => {
                const aIsFavorite = state.favourites.includes(a._id);
                const bIsFavorite = state.favourites.includes(b._id);
                if (aIsFavorite === bIsFavorite) {
                    return 0;
                }
                return aIsFavorite ? -1 : 1;
            });
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
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        changeQuantity(state, action) {
            const product = state.cart.find(product => product._id === action.payload._id);
            if (product) {
                product.quantity = action.payload.quantity;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        setCoupon(state, action) {
            state.coupon = action.payload;
        },
        deleteFromCart(state, action) {
            state.cart = state.cart.filter(product => product._id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        resetCart(state) {
            state.cart = [];
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        addToFavourites(state, action) {
            state.favourites.push(action.payload);
            localStorage.setItem("favourites", JSON.stringify(state.favourites));
        },
        deleteFromFavourites(state, action) {
            state.favourites = state.favourites.filter(id => id !== action.payload);
            localStorage.setItem("favourites", JSON.stringify(state.favourites));
        },
        sorting(state, action) {
            state.sortBy = action.payload
            if (state.sortBy === 'cheaper') {
                state.products.sort((a, b) => a.price - b.price);
            } else if (state.sortBy === 'dearer') {
                state.products.sort((a, b) => b.price - a.price);
            }
            state.products.sort((a, b) => {
                const aIsFavorite = state.favourites.includes(a._id);
                const bIsFavorite = state.favourites.includes(b._id);
                if (aIsFavorite === bIsFavorite) {
                    return 0;
                }
                return aIsFavorite ? -1 : 1;
            });
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
    deleteFromFavourites,
    sorting
} = productsSlice.actions
