import {productsFetching, productsFetchingError, productsFetchingSuccess} from "./slice.js";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const fetchProducts = (shopId) => {
    return async dispatch => {
        try {
            dispatch(productsFetching());
            const result = await fetch(`${SERVER_URL}/api/shops/${shopId}/products`);
            const json = await result.json();
            dispatch(productsFetchingSuccess(json));
        } catch (e) {
            dispatch(productsFetchingError(e.message))
        }
    }
}
