import {combineReducers, configureStore} from "@reduxjs/toolkit";
import shopsReducer from "../../entities/shop/model/slice";
import productsReducer from "../../entities/product/model/slice";

const rootReducer = combineReducers({
    shops: shopsReducer,
    products: productsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
