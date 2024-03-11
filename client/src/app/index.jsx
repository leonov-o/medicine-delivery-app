import React, {useEffect} from 'react';
import {router, withStore} from "./providers";
import {RouterProvider} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchAllShops} from "../entities/index.js";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllShops);
    }, []);

    return (
        <RouterProvider router={router}/>
    );
};

export default withStore(App);
