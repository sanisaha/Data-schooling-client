import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
    let error = useRouteError();
    console.error(error);
    return (
        <div>
            <div>Dang!</div>;
        </div>
    );
};

export default ErrorBoundary;