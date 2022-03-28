import React from 'react';
import './Login.css'
import {GrBike} from 'react-icons/gr'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
        <h2>Please Login <GrBike/></h2>
        <Container className='my-5 py-5 text-center d-flex justify-content-center form-bg'>
            <form className='d-flex flex-column justify-content-center w-50 form-container' >
                <input type="email" placeholder='Type email' name="email" />
                <input type="password" placeholder='Type password' name="password" />
                <p className='text-white'>Don't have an account ? <Link className='text-decoration-none text-white' to="/register">Register</Link></p>
                <button className="btn btn-dark">Login</button>
                ----------------------------or--------------------------------
                <button className="btn btn-info w-50">Login with google</button>
            </form>
        </Container>
        </>
    );
};

export default Login;