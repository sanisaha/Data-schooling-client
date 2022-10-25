import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2>This is course</h2>
        </div>
    );
};

export default Courses;