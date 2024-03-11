import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CartItem, resetCart, setCoupon} from "../../../entities";
import {TrashIcon} from "@heroicons/react/24/outline/index.js";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const CartList = () => {
    const cart = useSelector(state => state.products.cart);
    const [discount, setDiscount] = React.useState(1);

    const dispatch = useDispatch();

    const checkCoupon = async (code) => {
        dispatch(setCoupon(code))
        const response = await fetch(`${SERVER_URL}/api/coupon/${code}`);
        const data = await response.json();
        if (data) {
            setDiscount(data.discount);
        } else {
            setDiscount(1);
        }
    }
    const calcTotalAmount = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    return (
        <div className="grow px-8">
            <div className="flex justify-center items-center mb-4">
                <div className=" text-center text-2xl">Shopping Cart</div>
                <div className="w-6 h-6 ml-2 hover:scale-110" onClick={() => dispatch(resetCart())}>
                    <TrashIcon/>
                </div>
            </div>

            <div className="flex items-center justify-between bg-gray-100 mt-3 rounded-lg p-3">
                <div className="flex grow">
                    Product
                </div>
                <div className="w-36 text-center">
                    Price
                </div>
                <div className="w-48">
                    Quantity
                </div>
                <div className="w-24 text-center">
                    Amount
                </div>
                <div className="h-6 w-6"></div>
            </div>
            <div className="">
                {
                    !cart.length && <div className="mt-10 text-center text-3xl font-thin">
                        Cart is empty
                    </div>
                }
                <div className="overflow-y-auto h-[540px]">
                    {
                        cart.length
                            ? cart.map(item => <CartItem key={item._id} item={item}/>)
                            : null
                    }
                </div>
                <div className="mt-7 float-right flex">
                    <div className="">
                        <label className="text-lg" htmlFor="coupon">Coupon</label>
                        <input id="coupon" className="rounded-md border-2 p-1 outline-0 text-right ml-4" type="text"
                               placeholder="Coupon code" onChange={(e) => checkCoupon(e.target.value)}/>
                    </div>
                    <div className="font-medium text-right text-3xl ml-7">
                        Total amount: {(calcTotalAmount() * discount).toFixed(2)} UAH
                    </div>
                </div>

            </div>
        </div>

    );
};
