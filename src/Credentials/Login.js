import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const { providerLogin } = useContext(AuthContext);
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

    return (
        <div>
            <div className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form>
                                <div className="form-outline mb-4">
                                    <input type="email" id="form1Example13" className="form-control form-control-lg" />
                                    <label className="form-label" for="form1Example13">Email address</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" id="form1Example23" className="form-control form-control-lg" />
                                    <label className="form-label" for="form1Example23">Password</label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </div>

                                <Link onClick={handleGoogleSignIn} className="btn btn-success btn-lg btn-block me-2"
                                    role="button">
                                    <FaGoogle className='me-2' />Continue with Google
                                </Link>
                                <Link className="btn btn-info btn-lg btn-block" onClick={handleGithubSignIn}
                                    role="button">
                                    <FaGithub className='me-2' />Continue with Github</Link>
                                <p className="fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to='/register'
                                    className="link-danger">Register</Link></p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;