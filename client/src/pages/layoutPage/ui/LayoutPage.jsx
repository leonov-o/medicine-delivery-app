import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../../../widgets";

export const LayoutPage = () => {
    return (
        <div className="bg-green-300">
            <Header/>
            <Outlet/>
        </div>
    );
};
