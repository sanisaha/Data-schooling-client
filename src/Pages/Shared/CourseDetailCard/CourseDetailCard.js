import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const CourseDetailCard = () => {
    const course = useLoaderData();
    const { name, duration, details, image, author_name } = course;
    return (
        <div>
            <Card border="primary" style={{ width: '60rem' }}>
                <Card.Header className='fs-3 mb-4'>{name}</Card.Header>
                <img className='w-50 mx-auto' src={image} alt="" />
                <div className='d-flex justify-content-around fs-5 fw-semibold mt-4'>
                    <p>Instructor: {author_name}</p>
                    <p>Course Length: {duration}h</p>
                </div>
                <Card.Body>
                    <Card.Title>Course Description</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <div className='text-center'>
                    <Button variant="link"><Link>Get premium access</Link></Button>
                </div>

            </Card>
        </div>
    );
};

export default CourseDetailCard;