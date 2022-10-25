import React from 'react';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { id, name, details, image, author_name } = course;
    return (
        <Col>
            <Card className="mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid h-100 w-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{
                                details.length > 150 ?
                                    <>{details.slice(0, 150) + '....'} <Link to={`/courses/${id}`}>More details</Link> </>
                                    :
                                    details
                            }</p>
                            <p className="card-text"><small className="text-muted">By: {author_name}</small></p>
                        </div>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default CourseCard;