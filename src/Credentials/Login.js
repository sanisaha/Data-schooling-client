import { GithubAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { user, providerLogin, logOut } = useContext(AuthContext);
    const gitHubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        providerLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
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
            {user?.uid && <div>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;