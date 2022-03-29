import React from 'react';
import {GrBike} from 'react-icons/gr'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Register = () => {
    const {loginWithGoogle} = useAuth()
    return (
        <div>
            <>
        <h2>Please Register <GrBike/></h2>
        <Container className='my-5 py-5 text-center d-flex justify-content-center form-bg'>
            <form className='d-flex flex-column justify-content-center w-50 form-container' >
                <input type="email" placeholder='Type email' name="email" />
                <input type="password" placeholder='Type password' name="password" />
                <p className='text-white'>Already have an account ? <Link className='text-decoration-none text-white' to="/login">Login</Link></p>
                <button className="btn btn-dark">Register</button>
                ----------------------------or--------------------------------
                <button onClick={loginWithGoogle} className="btn btn-info w-50">Register with google</button>
            </form>
        </Container>
        </>
        </div>
    );
};

export default Register;