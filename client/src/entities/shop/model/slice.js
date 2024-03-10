import {createSlice} from "@reduxjs/toolkit";


const shopsSlice = createSlice({
    name: "shops",
    initialState: {
        shops: [],
        selected: null,
        isLoading: true,
        error: ''
    },
    reducers: {
        allShopsFetching(state) {
            state.isLoading = true;
        },
        allShopsFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = '';
            state.shops = action.payload;
        },
        allShopsFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        onSelectShop(state, action) {
            state.selected = action.payload;
        }
    }
});

export default shopsSlice.reducer;
export const {
    allShopsFetching,
    allShopsFetchingSuccess,
    allShopsFetchingError,
    onSelectShop
} = shopsSlice.actions
