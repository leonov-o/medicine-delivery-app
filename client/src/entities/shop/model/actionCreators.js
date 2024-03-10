import {allShopsFetching, allShopsFetchingError, allShopsFetchingSuccess} from "./slice.js";
import {SERVER_URL} from "../../../app/config";

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
