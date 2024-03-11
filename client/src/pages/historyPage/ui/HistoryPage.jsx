import React, {useState} from 'react';
import {HistoryForm, OrderList} from "../../../widgets";

export const HistoryPage = () => {
    const [orderHistory, setOrderHistory] = useState([]);

    const onResult = (data) => {
        setOrderHistory(data)
    };

    return (
        <div className="rounded-t-3xl bg-white p-10">
            <div className="flex justify-center">
                <HistoryForm onResult={onResult}/>
            </div>
            <div className="flex justify-center mt-12 mx-48">
                <OrderList orderHistory={orderHistory}/>
            </div>
        </div>
    );
};
