import React from 'react';
import Loader from 'react-loader-spinner'

const LoadingSpinner = () => {
   
    return (
        <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={1000} //2 secs
        />
    );
};

export default LoadingSpinner;