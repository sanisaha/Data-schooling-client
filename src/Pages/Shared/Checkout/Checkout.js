import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const { name, duration, author_name } = course;
    return (
        <div className='container'>
            <div className='p-5 my-3 bg-info text-center'>
                <h2>Name {name}</h2>
                <p className='fs-5'>An awesome course by our instructor <span className='text-primary fw-bold'>{author_name}</span></p>
                <div className='p-5 text-start'>
                    <p className='fs-4'><FaCheck /> 24h customer support</p>
                    <p className='fs-4'><FaCheck /> {duration}h full interactive study</p>
                    <p className='fs-4'><FaCheck /> free subscription to our monthly newsletter</p>
                    <p className='fs-4'><FaCheck /> get 50% discount on basic courses</p>
                    <p className='fs-4'><FaCheck /> free data science career consultation</p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;