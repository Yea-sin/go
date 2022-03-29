import React, { useRef } from 'react';
import './Login.css'
import {GrBike} from 'react-icons/gr'
import { Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef()
    const passRef = useRef()
    const {loginWithGoogle, loginWithEmailAndPassword} = useAuth()
    const handleForm = (e) =>{
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        loginWithEmailAndPassword(email, pass, location, navigate)
        e.preventDefault();
    }
    return (
        <>
        <h2>Please Login <GrBike/></h2>
        <Container className='my-5 py-5 text-center d-flex justify-content-center form-bg'>
            <form onSubmit={handleForm} className='d-flex flex-column justify-content-center w-50 form-container' >
                <input ref={emailRef} type="email" placeholder='Type email' name="email" />
                <input ref={passRef} type="password" placeholder='Type password' name="password" />
                <p className='text-white'>Don't have an account ? <Link className='text-decoration-none text-white' to="/register">Register</Link></p>
                <button type='submit' className="btn btn-dark">Login</button>
                ----------------------------or--------------------------------
                <button onClick={()=>loginWithGoogle(location, navigate)} className="btn btn-info w-50">Login with google</button>
            </form>
        </Container>
        </>
    );
};

export default Login;