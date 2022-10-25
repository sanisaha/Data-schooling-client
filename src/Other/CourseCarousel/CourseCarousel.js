import React from 'react';
import Card from 'react-bootstrap/Card';

const CourseCarousel = ({ basicCourse }) => {
    const { id, details, image, name, duration } = basicCourse;
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
            </Card>
        </div>
    )
};

export default CourseCarousel;