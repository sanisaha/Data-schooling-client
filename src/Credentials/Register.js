import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const handleCreateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUserProfile(name, photoURL);
            })
            .catch(e => console.error(e))
    }
    const handleUserProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }
    return (
        <div className='container bg-info rounded'>
            <Form onSubmit={handleCreateUser} className='w-50 mx-auto mt-5 fs-4 fw-semibold p-4'>
                <Form.Group className="mb-3">
                    <h2 className='text-center my-4 text-primary'>Sign Up Now</h2>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>PhotoUrl</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Your PhotoURL" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='align-center btn-block' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className="text-center fw-bold py-3 pt-1 mb-0">Already have an account? <Link to='/login'
                className="link-primary">Login</Link></p>
        </div>
    );
};

export default Register;