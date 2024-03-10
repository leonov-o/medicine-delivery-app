import React, {useState} from 'react';
import {Button} from "../../../shared/";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../entities/product/";

export const AddToCart = ({product}) => {
    const [buttonText, setButtonText] = useState("Add to cart");
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const onAddToCart = () => {
        if (product.available === 0) {
            setError("Product is out of stock");
            setTimeout(() => {
                setError(null)
            }, 2000);
            return;
        }
        console.log(product)
        dispatch(addToCart({...product, quantity: 1}));
        setButtonText("Added");
        setTimeout(() => {
            setButtonText("Add to cart");
        }, 2000);
    }

    return (
        <div className="relative">
            {
                error && (<div
                    className="absolute bottom-11 z-10 rounded-md border-2 border-gray-200 bg-white p-1.5">{error}</div>)
            }
            <Button className="w-28" onClick={() => onAddToCart()}>
                {buttonText}
            </Button>
        </div>
    );
};
