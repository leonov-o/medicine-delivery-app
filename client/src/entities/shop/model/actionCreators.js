import {allShopsFetching, allShopsFetchingError, allShopsFetchingSuccess} from "./slice.js";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const fetchAllShops = async (dispatch) => {
    try {
        dispatch(allShopsFetching());
        const result = await fetch(`${SERVER_URL}/api/shops`);
        const json = await result.json();
        dispatch(allShopsFetchingSuccess(json));
    } catch (e) {
        dispatch(allShopsFetchingError(e.message))
    }
}
