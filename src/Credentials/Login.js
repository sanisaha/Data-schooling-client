import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2>This is Login {user?.name}</h2>
        </div>
    );
};

export default Login;