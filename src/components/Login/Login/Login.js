import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './Login.css';
import img from '../../../image/world-tour-removebg-preview.png'
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
    const { signInWithGoogle, setUser, setIsLoading } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';

    const googleLogIn = () => {
        signInWithGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <div className='mt-5 pt-2'>
            <div>
                <h1><img className='w-25' src={img} alt="" />Chill Tour</h1>
            </div>
            <div className='login-section'>
                <h2> Please Log in </h2>
                <br />
                <button className='login-button' onClick={googleLogIn} ><i className="fab fa-google"></i>  Google log in </button>
                <br />
                <br />
                <p>Don't have an account <Link to='/register'>Create an Account</Link></p>
            </div>
        </div>
    );
};

export default Login;