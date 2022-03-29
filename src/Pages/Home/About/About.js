import React from 'react';
import { Container } from 'react-bootstrap';
import {RiMotorbikeLine} from 'react-icons/ri';

const About = () => {
    return (
        <Container className='my-5'>
            <h2>About us</h2>
            <div className="row align-items-center justify-content-around">
                <div className="col-md-6">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minus quas explicabo laudantium quo autem ullam voluptatibus? Aut iusto dolorum harum culpa maiores voluptates inventore quisquam corporis alias nobis. Id ad deserunt laboriosam consequuntur numquam tenetur nam. Quod similique illo praesentium aut dicta? Ratione nulla ex, aliquam quos alias excepturi.</p>
                </div>
                <div className="col-md-6">
                <h1 style={{fontSize:'150px', marginBottom:'70px'}}><RiMotorbikeLine/></h1>
                </div>
            </div>
        </Container>
    );
};

export default About;