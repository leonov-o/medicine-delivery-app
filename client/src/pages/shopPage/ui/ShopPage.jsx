import React from 'react';
import {ProductList, ShopList} from "../../../widgets";

export const ShopPage = () => {


    return (
        <div className="">
            <div className="py-14 text-center text-4xl font-normal text-white">
                Order a variety of health products from different shops.
            </div>
            <div className="flex justify-between rounded-t-3xl bg-white p-10">
                <ShopList/>
                <ProductList/>
            </div>
        </div>
    );
};

