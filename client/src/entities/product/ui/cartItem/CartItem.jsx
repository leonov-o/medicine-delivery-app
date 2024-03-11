import React, {useState} from 'react';
import {textCut} from "../../../../shared/index.js";
import {useDispatch, useSelector} from "react-redux";
import {changeQuantity, deleteFromCart} from "../../model/index.js";
import {XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {DeleteFromCart} from "../../../../features/index.js";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const CartItem = ({item}) => {
    const [totalPrice, setTotalPrice] = useState(item.price * item.quantity);
    const dispatch = useDispatch();

    const onChangeQuantity = (value) => {
        dispatch(changeQuantity({
            _id: item._id,
            quantity: value
        }));
        setTotalPrice(item.price * value);
    }

    return (
        <div className="flex items-center justify-between bg-gray-100 mt-3 rounded-lg p-3">
            <div className="flex grow">
                <div className="h-24 w-24 flex items-center justify-center rounded-md bg-white p-1.5">
                    <img className="w-20" src={`${SERVER_URL}/${item.image}`} alt="product image"/>
                </div>
                <div className="ml-4 max-w-80">
                    <div className="text-xl">
                        {item.name}
                    </div>
                    <div className="font-thin text-lg">
                        {textCut(item.description, 50)}
                    </div>
                    <div className="font-thin text-lg">
                        From: {item.shopName}
                    </div>
                </div>
            </div>
            <div className="w-36 text-center">
                {item.price} UAH
            </div>
            <div className="w-48">
                <input className="rounded-md border-2 p-1 outline-0 text-right" type="number" min={1} value={item.quantity}
                       onChange={(e) => onChangeQuantity(Number(e.target.value))}/>
            </div>
            <div className="w-24 text-center">
                {totalPrice} UAH
            </div>
            <DeleteFromCart id ={item._id} />
        </div>
    );
};
