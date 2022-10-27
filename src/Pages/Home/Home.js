import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCarousel from '../../Other/CourseCarousel/CourseCarousel';
import './Home.css'

const Home = () => {
    const courses = useLoaderData();
    const basicCourses = courses.filter(basic => basic.category === 'Basic');

    return (
        <div className="text-center py-5">
            <Card className="text-center bg-pic py-5">
                <Card.Body className='text-white py-5'>
                    <Card.Title className='fs-2 py-2 fw-bold'>Data Science is future!</Card.Title>
                    <Card.Text className='fs-4 my-3 fw-semibold'>
                        Our competitive online coarses are designed for future data scientists and run by professionals.
                    </Card.Text>
                    <Button className='my-5 btn-block px-4' variant="info"><Link className='text-decoration-none' to='/register'>Explore now</Link></Button>
                </Card.Body>
            </Card>
            <div className='my-4 p-4'>
                <h2>Popular courses</h2>
            </div>
            <div className='container'>
                <div className='row'>
                    {
                        basicCourses.map(basicCourse => <CourseCarousel
                            key={basicCourse.id}
                            basicCourse={basicCourse}
                        ></CourseCarousel>)

                    }
                </div>
                <Button className='my-5'><Link to='/courses' className='text-white text-decoration-none'>More Coarses</Link></Button>
            </div>
        </div>
    );
};

export default Home;