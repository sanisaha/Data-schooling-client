import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import CourseCard from '../Shared/CourseCard/CourseCard';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <Row xs={1} md={1} className="g-4">
                {courses.map(course => <CourseCard
                    key={course.id}
                    course={course}
                ></CourseCard>)}
            </Row>
        </div>
    );
};

export default Courses;