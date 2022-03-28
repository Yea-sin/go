import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='mb-5'>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/6DckYZR/patrick-hendry-q-DBb-M9-Erwo4-unsplash.jpg"
      alt="First slide"
      height="600px"
    />
    <Carousel.Caption>
      <h1 style={{marginBottom:'30%',marginRight:'50px', fontSize:'80px', fontFamily:'fantasy'}}>Sporty Ride Or Speedy Commuter</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/m5QCXZ7/flo-karr-n-Cj0z-BLIa-Ak-unsplash.jpg"
      alt="Second slide"
      height="600px"
    />

    <Carousel.Caption>
    <h1 style={{marginBottom:'25%',marginRight:'50px', fontSize:'80px', fontFamily:'fantasy'}}>The Next Generation Of Bikes</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;