import React from 'react';

export const Loader = ({className}) => {
    return <div className={`w-6 h-6 border-b-2 border-green-300 rounded-full animate-spin ${className}`}></div>
};
