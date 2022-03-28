import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import {AiOutlineDoubleRight} from 'react-icons/ai'

const Shop = () => {
    const [type, setType] = useState('bike');
    const {products} = useProducts();
    const handleProduct=(type)=>{
            setType(type)
    }
    return (
        <Container className='my-5'>
            <h2>Shop By Catagories ::</h2>
            <div className="d-flex justify-content-center mt-4 catagories">
                <button onClick={()=>handleProduct('bike')} className="btn border border-dark">Bikes</button>
                <button onClick={()=>handleProduct('accessories')} className="btn border border-dark ms-3">Accessories</button>
            </div>
            <Row className='' md={3} sm={3} xs={2}>
                {
                    products.filter(item=>item.type === type).slice(0,3).map(product=><Col key={product.id} className='my-5'>
                    <Card className='p-3 border-0 shadow-lg rounded' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.img} />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text style={{color:'#603e0a', fontSize:'30px'}}>
      ${product.price}
    </Card.Text>
    
  </Card.Body>
</Card>
                    </Col>)
                }
                <Link className='ms-auto text-decoration-none text-dark' to="/products">View all<AiOutlineDoubleRight className='ms-2'/></Link>
            </Row>
        </Container>
    );
};

export default Shop;