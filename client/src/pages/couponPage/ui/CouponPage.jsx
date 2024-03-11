import React, {useEffect} from 'react';
import {CouponCard} from "../../../entities/index.js";
import {SkeletonItem} from "../../../shared/index.js";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
export const CouponPage = () => {
    const [coupons, setCoupons] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        getCoupons().then(data => setCoupons(data))
    }, []);
    const getCoupons = async () => {
        setIsLoading(true);
        const response = await fetch(`${SERVER_URL}/api/coupons`);
        const data = await response.json();
        setIsLoading(false);
        return data;
    }

    return (
        <div>
            <div className="py-14 text-center text-4xl font-normal text-white">
                Save money with discount coupons.
            </div>
            <div className="flex justify-center rounded-t-3xl bg-white py-10 px-24 flex-wrap">
                {
                    isLoading
                        ? Array.from({length: 5}).map((_, index) => <SkeletonItem key={index}
                                                                                   className="w-72 h-56 bg-green-100 p-4 rounded-md mr-4 mb-4"/>)
                        : coupons.map(coupon => (
                            <CouponCard key={coupon._id} coupon={coupon}/>
                        ))
                }
            </div>
        </div>
    );
};
