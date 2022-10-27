import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
            <h2 className='p-4 text-center border border-light mt-2'>Questions and Answer</h2>
            <Accordion className='my-5 p-5' defaultActiveKey="0">
                <Accordion.Item className='' eventKey="0">
                    <Accordion.Header>
                        <p className='fs-5 fw-semibold'>what is cors?</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='text-secondary'>
                            Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='' eventKey="1">
                    <Accordion.Header className=''>
                        <p className='fs-5 fw-semibold'>Why are you using firebase? What other options do you have to implement authentication?</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='text-secondary'>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. I am using firebase for building my app application. Specially for authentication and hosting my app. Auth0, MongoDB and Okta are the common alternatives of firebase for authentication. </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='' eventKey="2">
                    <Accordion.Header className=''>
                        <p className='fs-5 fw-semibold'>How does the private route work?</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='text-secondary'>PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='' eventKey="3">
                    <Accordion.Header className=''>
                        <p className='fs-5 fw-semibold'>What is Node? How does Node work?</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='text-secondary'>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application.Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
};

export default Blog;