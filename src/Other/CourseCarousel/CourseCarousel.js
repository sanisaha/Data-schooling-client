import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
/* here for home page we set some course details based on basic category, from courses we applied filter for basic category, then we applied find and got specific course */
const CourseCarousel = ({ basicCourse }) => {
    const { id, image, name, duration } = basicCourse;
    return (
        <div className='col'>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <Card.Text className='fs-5'>
                    Coarse Length: {duration}h
                </Card.Text>
                <button className='p-3 border-0'><Link className='text-decoration-none fs-4' to={`/courses/${id}`}>More details</Link></button>
            </Card>
        </div>
    )
};

export default CourseCarousel;