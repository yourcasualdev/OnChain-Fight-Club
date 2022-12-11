import React from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const withToast = (WrappedComponent: React.FC) => {
    const WithToast: React.FC = (props) => {
        return (
            <>
                <ToastContainer />
                <WrappedComponent {...props} />
            </>
        );
    };
    return WithToast;
};