import React from 'react';

import {Link, useLocation} from "react-router-dom";
import {ShoppingCartIcon} from "@heroicons/react/24/outline/index.js";
import clsx from "clsx";

export const Header = () => {
    const location = useLocation();
    const navLinks = [
        {
            name: "Shop",
            link: "/"
        },
        {
            name: "Coupons",
            link: "/coupons"
        },
        {
            name: "History",
            link: "/history"
        }
    ];
    return (
        <div className="flex h-20 items-center justify-between px-10">
            <div className="">
                <img src="/logo.svg" alt="logo"/>
            </div>
            <div className="flex text-lg font-medium text-white">
                {
                    navLinks.map((item, index) => (
                        <Link key={index} to={item.link}>
                            <div className={clsx("ml-4 transition-all duration-200", {["scale-110"] : location.pathname === item.link} )}>
                                {item.name}
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className="flex flex-1 justify-end">
                <Link to="/shopping-cart">
                    <ShoppingCartIcon className={clsx("h-6 w-6 text-white transition-all duration-200", {["scale-125"] : location.pathname === "/shopping-cart"} )}/>
                </Link>
            </div>
        </div>
    );
};
