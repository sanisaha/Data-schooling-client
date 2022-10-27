import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {

    return (
        <div>
            <Accordion className='my-5 p-5' defaultActiveKey="0">
                <Accordion.Item className='my-2 p-3' eventKey="0">
                    <Accordion.Header>What is the course duration?</Accordion.Header>
                    <Accordion.Body>
                        <p className='text-secondary'>Duration is course specific</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='my-2 p-3' eventKey="1">
                    <Accordion.Header className=''>what time is support session?</Accordion.Header>
                    <Accordion.Body>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='my-2 p-3' eventKey="1">
                    <Accordion.Header className=''>how I can get monthly newsletter?</Accordion.Header>
                    <Accordion.Body>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='my-2 p-3' eventKey="1">
                    <Accordion.Header className=''>Are the instructors well skilled?</Accordion.Header>
                    <Accordion.Body>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='my-2 p-3' eventKey="1">
                    <Accordion.Header className=''>Do I get certificates after complete?</Accordion.Header>
                    <Accordion.Body>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
};

export default FAQ;