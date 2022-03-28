import React from 'react';
import './Services.css';
import {AiOutlineSetting} from 'react-icons/ai';
import {GiMechanicalArm} from 'react-icons/gi';
import {RiMotorbikeLine} from 'react-icons/ri';
import { Col, Container, Row } from 'react-bootstrap';

const Services = () => {
    return (
        <Container className='my-5'>
            <h2>Our Services</h2>
            <Row className='gx-5' md={3} sm={3} xs={1}>
                <Col className='border-end services'>
                    <div className="services-content">
                        <h1 className='border-top border-bottom d-inline py-4 px-4 rounded'><AiOutlineSetting/></h1>
                        <h3 className='mt-5 pt-4'>Complete Overhaul</h3>
                    </div>
                </Col>
                <Col className='border-end services'>
                    <div className="services-content">
                        <h1 className='border-top border-bottom d-inline py-4 px-4 rounded'><GiMechanicalArm/></h1>
                        <h3 className='mt-5 pt-4'>Custom Parts & Accessories</h3>
                    </div>
                </Col>
                <Col className='border-end services'>
                    <div className="services-content">
                        <h1 className='border-top border-bottom d-inline py-4 px-4 rounded'><RiMotorbikeLine/></h1>
                        <h3 className='mt-5 pt-4'>Bike Fitting & Delivery</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;