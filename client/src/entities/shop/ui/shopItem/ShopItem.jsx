import React from 'react';
import clsx from "clsx";
import {useSelector} from "react-redux";
import {textCut} from "../../../../shared/index.js";

export const ShopItem = ({id, name, onClick}) => {
    const {selected} = useSelector(state => state.shops);
    return (
        <div className={clsx(
            'w-72 h-16 mb-3 rounded-xl flex justify-center items-center text-xl font-normal bg-gray-100 cursor-pointer transition-all duration-200 shadow-md',
            {
                ["bg-green-200 text-white text-2xl hover:none"]: selected === id,
                ["hover:bg-gray-200"]: selected !== id
            }
        )}
             onClick={onClick}>
            {textCut(name, 22)}
        </div>
    );
};
