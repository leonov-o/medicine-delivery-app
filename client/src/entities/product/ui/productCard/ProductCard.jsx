import React from 'react';
import {SERVER_URL} from "../../../../app/config.js";
import {textCut} from "../../../../shared/";
import {AddToCart} from "../../../../features/";

export const ProductCard = ({product}) => {
    const {name, description, price, available, image} = product;


    return (
        <div className="mr-5 mb-5 w-72 rounded bg-gray-100 p-4">
            <div className="mx-auto flex h-48 w-64 items-center justify-center rounded-md bg-white p-1.5">
                <img className="w-44" src={`${SERVER_URL}/${image}`} alt="product image"/>
            </div>
            <div className="mt-4 flex justify-between">
                <div className="font-medium">
                    {textCut(name, 14)}
                </div>
                <div className="font-medium">{price} UAH</div>
            </div>
            <div className="h-12 text-justify font-thin">{textCut(description, 58)}</div>
            <div className="mt-4 flex justify-between">
                <div className="mt-3 font-thin">Available: {available} pcs.</div>
                <AddToCart product={product}/>
            </div>

        </div>
    );
};
