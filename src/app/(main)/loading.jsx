import React from 'react';

const LoadingPage = () => {
    return (
        <div className='flex h-[84vh] items-center justify-center'>
            Animals By Id Loading
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default LoadingPage;