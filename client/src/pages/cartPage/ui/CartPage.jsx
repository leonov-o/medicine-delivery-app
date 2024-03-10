import React from 'react';
import {OrderForm} from "../../../widgets";
import {CartList} from "../../../widgets/cartList/index.js";

export const CartPage = () => {
    return (
        <div className="flex justify-between rounded-t-3xl bg-white p-10">
            <OrderForm/>
            <CartList/>
        </div>
    );
};
