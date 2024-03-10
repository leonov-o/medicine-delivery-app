import {createBrowserRouter} from "react-router-dom";
import {CartPage, LayoutPage, ShopPage} from "../../../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPage/>,
        // errorElement: <NotFoundPage/>,
        children: [
            {
                index: true,
                element: <ShopPage/>
            },
            {
                path: "/coupons",
                element: <div>Coupons</div>
            },
            {
                path: "/history",
                element: <div>History</div>
            },
            {
                path: "/shopping-cart",
                element: <CartPage/>
            },

        ]
    }
]);
