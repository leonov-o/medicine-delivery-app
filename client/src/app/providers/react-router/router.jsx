import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPage/>,
        // errorElement: <NotFoundPage/>,
        children: [

        ]
    }
]);
