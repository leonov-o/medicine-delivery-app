import React from 'react';
import {Button} from "../../../../shared/index.js";
import {CopyButton} from "../../../../features/index.js";

export const CouponCard = ({coupon}) => {
    const {title, description, code} = coupon;


    return (
        <div className="w-72 h-56 bg-green-100 p-4 rounded-md mr-4 mb-4">
            <div className="font-bold text-xl text-center bg-white p-3 rounded-md">
                {code}
            </div>
            <div className="font-medium mt-5">
                {title}
            </div>
            <div className="font-thin">
                {description}
            </div>

            <CopyButton text={code}/>

        </div>
    );
};
