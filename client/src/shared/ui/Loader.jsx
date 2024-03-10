import React from 'react';

export const Loader = ({className}) => {
    return <div className={`w-20 h-20 border-b-2 border-green-300 rounded-full animate-spin ${className}`}></div>
};
