import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllShops, onSelectShop, ShopItem} from "../../../entities/";
import {Loader, SkeletonItem} from "../../../shared/";

export const ShopList = () => {
    const {shops, isLoading, error} = useSelector(state => state.shops);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllShops);
    }, []);

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className="w-96 border-r-2 px-8">
            <div className="mb-4 text-center text-2xl">Shops</div>
            <div className="overflow-y-auto h-[810px]">
                {
                    isLoading
                        ? Array.from({length: 10}).map((_, index) => <SkeletonItem key={index}
                            className="mb-3 h-16 w-72 rounded-xl bg-gray-100"/>)
                        : shops.map(shop => <ShopItem key={shop._id} id={shop._id} name={shop.name}
                                                      onClick={() => dispatch(onSelectShop(shop._id))}/>)
                }
            </div>
        </div>
    );
};
