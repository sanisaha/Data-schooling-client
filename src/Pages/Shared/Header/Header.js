import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../assets/images/data schooling.jpg'
import { useState } from 'react';

const Header = () => {
    const [condition, setCondition] = useState('Dark');
    const handleToggle = () => {
        if (condition === 'Light') {
            setCondition('Dark');
        } else {
            setCondition('Light');
        }
    }
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
                <Container>
                    <Image
                        src={logo}
                        rounded
                        style={{ height: '40px', weight: '40px' }}
                    ></Image>
                    <Navbar.Brand><Link className='text-decoration-none fs-3 me-6' to='/'>Data-Schooling</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fs-4">
                            <Nav><Link className='text-decoration-none me-4' to='/courses'>Courses</Link></Nav>
                            <Nav><Link className='text-decoration-none me-4' to='/faq'>FAQ</Link></Nav>
                            <Nav><Link className='text-decoration-none me-4' to='/blog'>Blog</Link></Nav>
                            <Nav><Link className='text-decoration-none' onClick={handleToggle}>{condition}</Link></Nav>

                        </Nav>
                        <Nav><Link className='text-decoration-none me-4 fs-4' to='/login'>Login</Link></Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;