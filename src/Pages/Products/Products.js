import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';

const Products = () => {
    const {products} = useProducts();
    
    return (
        <Container className='my-5'>
            <h2>Products ::</h2>
        
            <Row className='' md={3} sm={3} xs={2}>
                {
                    products.map(product=><Col key={product.id} className='my-5'>
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
            </Row>
        </Container>
    );
};

export default Products;