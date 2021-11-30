import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import img from '../../../image/world-tour-removebg-preview.png'

const Register = () => {
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
        <div className='mt-5'>
            <div className='mt-5 pt-2'>
                <div>
                    <h1><img className='w-25' src={img} alt="" />Chill Tour</h1>
                </div>
                <div className='login-section'>
                    <h2> Please Register</h2>
                    <br />
                    <button className='login-button' onClick={googleLogIn} ><i className="fab fa-google"></i> Sign up With Google </button>
                    <br />
                    <br />
                    <p>Already have an Account? <Link to='/login'>exists account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;