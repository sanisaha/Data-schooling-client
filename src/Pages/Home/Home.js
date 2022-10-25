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
        <div className="text-center">
            <Card className="text-center bg-pic">
                <Card.Body className='text-white'>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text className='fs-4'>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <div>
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
                <Button><Link to='/courses' className='text-white'>More Coarses</Link></Button>
            </div>
        </div>
    );
};

export default Home;