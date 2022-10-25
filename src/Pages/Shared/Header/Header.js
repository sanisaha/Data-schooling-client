import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to='/'>Data-Schooling</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav><Link to='/courses'>Courses</Link></Nav>
                            <Nav><Link to='/faq'>FAQ</Link></Nav>
                            <Nav><Link to='/blog'>Blog</Link></Nav>

                        </Nav>
                        <Nav>
                            <><Link to='/login'>login</Link></>
                            <><Link to='/register'>register</Link></>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;