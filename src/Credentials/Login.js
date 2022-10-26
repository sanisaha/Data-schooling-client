import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { providerLogin, logOut } = useContext(AuthContext);
    const gitHubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const handleGithubSignIn = () => {
        providerLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
            })
            .catch(error => console.error(error))
    }
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
            })
            .catch(error => console.error(error))
    }
    const handleLogOut = () => {
        logOut();
    }
    return (
        <div>
            <button onClick={handleGithubSignIn}>GitHub SignIn</button>
            <button onClick={handleLogOut}>Logout</button>
            <button onClick={handleGoogleSignIn}>Google SignIn</button>
        </div>
    );
};

export default Login;