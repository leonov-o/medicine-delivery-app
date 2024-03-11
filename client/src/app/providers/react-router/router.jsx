import {createBrowserRouter} from "react-router-dom";
import {CartPage, CouponPage, HistoryPage, LayoutPage, ShopPage} from "../../../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPage/>,
        children: [
            {
                index: true,
                element: <ShopPage/>
            },
            {
                path: "/coupons",
                element: <CouponPage/>
            },
            {
                path: "/history",
                element: <HistoryPage/>
            },
            {
                path: "/shopping-cart",
                element: <CartPage/>
            },

        ]
    }
]);
