import React, {useEffect, useState} from 'react';
import clsx from "clsx";
import {Button} from "../../../../shared/";
import {XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {useSelector} from "react-redux";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const CustomerDetailsPopup = ({customer_data, onClose}) => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-gray-100 p-2 rounded-md">
                <div className="float-right w-7 h-7" onClick={onClose}>
                    <XMarkIcon/>
                </div>
                <div className="p-6">
                    {
                        Object.keys(customer_data).map(key => (
                            <div className="mb-3">
                                <div className="mb-2">
                                    <label className="font-semibold" htmlFor={key}>{key}</label>
                                </div>
                                <input
                                    id={key}
                                    className="bg-gray-200 border border-gray-300 rounded-md p-2"
                                    type="text"
                                    value={customer_data[key]}
                                    readOnly
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

const OrderDetailsPopupItem = ({item}) => {
    const shops = useSelector(state => state.shops.shops);
    const [productData, setProductData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {product_id, price, quantity} = item;

    useEffect(() => {
        getProductData().then(data => {
            setProductData(data);
        })
    }, []);
    const getProductData = async () => {
        setIsLoading(true);
        const response = await fetch(`${SERVER_URL}/api/products/${product_id}`)
        const data = await response.json();
        setIsLoading(false);
        return data;
    };

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="bg-gray-200 mb-8 p-4">
            <div className="w-32 h-32 flex justify-center items-center p-2 bg-white rounded-lg">
                <img src={`${SERVER_URL}/${productData.image}`} alt="productImage" className="w-28"/>
            </div>
            <div className="text-lg font-medium">
                {productData.name}
            </div>
            <div className="text-lg">
                Price: {price} UAH
            </div>
            <div className="text-lg">
                Quantity: {quantity} pcs.
            </div>
            <div className="text-lg">
                From shop: {shops.find((shop) => (shop._id === productData.shop_id)).name}.
            </div>
        </div>
    );
}

const OrderDetailsPopup = ({order_details, onClose}) => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-gray-100 p-2 rounded-md">
                <div className="float-right w-7 h-7" onClick={onClose}>
                    <XMarkIcon/>
                </div>
                <div className="p-12 max-h-[600px] overflow-auto mt-12">
                    {
                        order_details.map((item, index) => <OrderDetailsPopupItem key={index} item={item}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export const OrderItem = ({order}) => {
    const [showCustomerDetailsPopup, setShowCustomerDetailsPopup] = useState(false);
    const [showOrderDetailsPopup, setShowOrderDetailsPopup] = useState(false);

    const {order_id, total_price, status} = order;
    return (
        <div className="h-20 bg-gray-100 flex items-center justify-between rounded-md p-8">
            <div className="font-medium text-xl grow flex">
                <div className="">
                    № {order_id}
                </div>
                <div className={clsx(
                    "ml-5 uppercase text-xs font-medium me-2 px-4 py-1.5 rounded-full",
                    {
                        ["bg-green-100 text-green-800"]: status === 'completed',
                        ["bg-yellow-100 text-yellow-800"]: status === 'pending',
                        ["bg-red-100 text-red-800"]: status === 'canceled'
                    }
                )}>{status}</div>
            </div>

            {
                showCustomerDetailsPopup && <CustomerDetailsPopup customer_data={order.customer_data}
                                                                  onClose={() => setShowCustomerDetailsPopup(false)}/>
            }
            <Button className="mr-5" onClick={() => setShowCustomerDetailsPopup(true)}>View customer details</Button>
            {
                showOrderDetailsPopup &&
                <OrderDetailsPopup order_details={order.order_details} onClose={() => setShowOrderDetailsPopup(false)}/>
            }
            <Button className="mr-5" onClick={() => setShowOrderDetailsPopup(true)}>View order details</Button>

            <div className="font-medium text-xl">Total amount: {total_price} UAH</div>

        </div>
    );
};


