import React, { useRef } from 'react';
import {GrBike} from 'react-icons/gr'
import { Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Register = () => {
    const {loginWithGoogle, registerWithEmailAndPassword} = useAuth();
    const emailRef = useRef();
    const passRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    const handleForm = (e) =>{
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        registerWithEmailAndPassword(email, pass, location, navigate)
        e.preventDefault();
    }
    return (
        <div>
            <>
        <h2>Please Register <GrBike/></h2>
        <Container className='my-5 py-5 text-center d-flex justify-content-center form-bg'>
            <form onSubmit={handleForm} className='d-flex flex-column justify-content-center w-50 form-container' >
                <input ref={emailRef} type="email" placeholder='Type email' name="email" />
                <input ref={passRef} type="password" placeholder='Type password' name="password" />
                <p className='text-white'>Already have an account ? <Link className='text-decoration-none text-white' to="/login">Login</Link></p>
                <button type='submit' className="btn btn-dark">Register</button>
                ----------------------------or--------------------------------
                <button onClick={loginWithGoogle} className="btn btn-info w-50">Register with google</button>
            </form>
        </Container>
        </>
        </div>
    );
};

export default Register;