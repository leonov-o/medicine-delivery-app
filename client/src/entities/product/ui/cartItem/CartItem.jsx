import React, {useState} from 'react';
import {SERVER_URL} from "../../../../app/config.js";
import {textCut} from "../../../../shared/index.js";
import {useDispatch, useSelector} from "react-redux";
import {changeQuantity, deleteFromCart} from "../../model/index.js";
import {XMarkIcon} from "@heroicons/react/24/outline/index.js";

export const CartItem = ({item}) => {
    const [totalPrice, setTotalPrice] = useState(item.price * item.quantity);
    const shops = useSelector(state => state.shops.shops);
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
                        From: {shops.find((shop) => shop._id === item.shop_id).name}
                    </div>
                </div>
            </div>
            <div className="w-36 text-center">
                {item.price} UAH
            </div>
            <div className="w-48">
                <input className="rounded-md border-2 p-1 outline-0 text-right" type="number" value={item.quantity}
                       onChange={(e) => onChangeQuantity(Number(e.target.value))}/>
            </div>
            <div className="w-24 text-center">
                {totalPrice} UAH
            </div>
            <div onClick={() => dispatch(deleteFromCart(item._id))}>
                <XMarkIcon className="h-6 w-6 cursor-pointer"/>
            </div>
        </div>
    );
};
