import React from 'react';
import {OrderItem} from "../../../entities/index.js";

export const OrderList = ({orderHistory}) => {
    return (
        <div className="border-2 w-full max-h-[400px] overflow-auto p-7 rounded">
            {
                orderHistory.map(order => <OrderItem key={order._id} order={order}/>)
            }
        </div>
    );
};
