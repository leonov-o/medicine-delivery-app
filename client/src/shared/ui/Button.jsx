import React from 'react';

export const Button = ({className, type = "button", onClick, children}) => {
    return (
        <button
            className={`cursor-pointer rounded-md bg-green-300 p-2 font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-green-500 text-center ${className}`}
            type={type}
            onClick={onClick}>
            {children}
        </button>
    );
};

