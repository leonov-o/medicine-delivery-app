import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts, ProductCard} from "../../../entities/product/index.js";
import {SkeletonItem} from "../../../shared/index.js";

export const ProductList = () => {
    const {selected} = useSelector(state => state.shops);
    const {products, favourites, isLoading, error} = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selected){
            dispatch(fetchProducts(selected));
        }
    }, [selected]);

    return (
        <div className="grow px-8">
            <div className="mb-4 text-center text-2xl">Products</div>
            <div className="overflow-y-auto h-[810px]">
                {
                    !selected && !isLoading && <div className="mt-10 text-center text-3xl font-thin">
                        Select one of the available shops
                    </div>
                }
                <div className="flex flex-wrap">
                    {
                       isLoading > 0
                           ? Array.from({length: 10}).map(() => <SkeletonItem className="mr-5 mb-5 w-72 h-60 rounded bg-gray-100"/>)
                           :products.map(product => <ProductCard key={product._id} product={product}/>)
                    }
                </div>
            </div>
        </div>
    );
};
