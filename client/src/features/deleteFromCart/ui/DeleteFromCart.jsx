import React from 'react';
import {deleteFromCart} from "../../../entities/";
import {XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {useDispatch} from "react-redux";

export const DeleteFromCart = ({id}) => {
    const dispatch = useDispatch();
    return (
        <div onClick={() => dispatch(deleteFromCart(id))}>
            <XMarkIcon className="h-6 w-6 cursor-pointer"/>
        </div>
    );
};
