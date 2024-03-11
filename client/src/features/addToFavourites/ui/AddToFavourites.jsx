import React from 'react';
import {StarIcon} from "@heroicons/react/24/outline/index.js";
import {StarIcon as StarIconFilled} from "@heroicons/react/24/solid/index.js";
import {useDispatch, useSelector} from "react-redux";
import {addToFavourites, deleteFromFavourites} from "../../../entities";
export const AddToFavourites = ({id, className}) => {
    const {favourites} = useSelector(state => state.products);
    const dispatch = useDispatch();
    const isFavourite = favourites.find((el) => el === id) !== undefined;

    return (
        <div className={`w-7 h-7 text-yellow-500 ${className}`}>
            {
                isFavourite
                    ? <StarIconFilled onClick={() => dispatch(deleteFromFavourites(id))}/>
                    : <StarIcon onClick={() => dispatch(addToFavourites(id))}/>
            }
        </div>
    );
};
