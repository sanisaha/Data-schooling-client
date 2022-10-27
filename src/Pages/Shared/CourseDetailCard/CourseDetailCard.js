import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ReactToPdf from 'react-to-pdf'

const ref = React.createRef();
const CourseDetailCard = () => {
    const course = useLoaderData();
    const { id, name, duration, details, image, author_name } = course;
    return (
        <div>
            <div style={{ width: '50rem' }} className='d-flex justify-content-around py-4 bg-info rounded ms-5'>
                <h2>Course detail Outline</h2>
                <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                    {({ toPdf }) => (
                        <button onClick={toPdf}>Download Outline</button>
                    )}
                </ReactToPdf>
            </div>
            <div className='ps-5'>
                <Card ref={ref} border="primary" style={{ width: '50rem' }}>
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
                </Card>
                <div className='my-4 w-50 mx-auto'>
                    <Button className='text-decoration-none border border-primary bg-info' variant="link"><Link className='text-decoration-none fw-semibold fs-3' to={`/checkout/${id}`}>Get premium access</Link></Button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailCard;