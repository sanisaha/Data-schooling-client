import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center'>
            <footer class="bg-light text-center text-lg-start">
                <div class="text-center p-5 fs-5" style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2022 Copyright:
                    <Link class="text-dark text-decoration-none"> DataSchooling</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;