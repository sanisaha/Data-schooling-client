import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
/* useEffect used because data was fetching from outside */

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h2>Courses</h2>
            <div>
                {
                    courses.map(course => <p
                        key={course.id}
                    ><Link className='fs-5' to={`/courses/${course.id}`}>{course.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;