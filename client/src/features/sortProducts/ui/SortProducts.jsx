import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sorting} from "../../../entities/";

export const SortProducts = () => {
    const sortBy = useSelector(state => state.products.sortBy);
    const dispatch = useDispatch();

    return (
        <div className="flex space-x-4 mb-3">
            <div className="">Sorting:</div>
            <div className="">
                <input id="cheaper" checked={sortBy === 'cheaper'} onChange={() => dispatch(sorting("cheaper"))}
                       type="radio"/>
                <label className="ml-2" htmlFor="cheaper">Cheaper</label>
            </div>
            <div className="">
                <input id="dearer" checked={sortBy === "dearer"} onChange={() => dispatch(sorting("dearer"))}
                       type="radio"/>
                <label className="ml-2" htmlFor="dearer">Dearer</label>
            </div>
        </div>
    );
};
