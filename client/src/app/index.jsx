import React from 'react';
import {router, withStore} from "./providers";
import {RouterProvider} from "react-router-dom";

const App = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default withStore(App);
