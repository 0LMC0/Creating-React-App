import React from 'react'
import { Card, ListGroup, ListGroupItem, Container, Image, Row, Col, Button  } from 'react-bootstrap';

const ItemDetail = ({product}) => {
    return (
        <div>
            <Container>
                <div className="class"></div>
                
                    
                   
                        <Row>
                            <Col xs={5}>
                               <Image style={{ width: '100%' }} src={product.img}/>
                            </Col>
                        <Col xs={7}>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                            <Card.Text className="blockquote-footer p3">
                            Producto Nuevo || La mejor calidad
                            </Card.Text>
                                <Card.Title className='display-1 mb-5 mt-5'>{product.name}</Card.Title>
                                <Card.Text className='p mb-5 mt-5'>
                                    {product.description}
                                </Card.Text>   
                                <Card.Title className='mb-2 mt-4' >
                                    Precio:
                                </Card.Title>
                                <Card.Text className='display-5 mb-5'>
                                    ${product.price}
                                </Card.Text>
                                  <Button variant="primary" size="lg" style={{ width: '40%' }} >Comprar</Button>{' '} 
                                  <Button variant="secondary" size="lg" style={{ width: '40%' }} >Agregar al carrito</Button>{' '} 
                                </Card.Body>
                                <ListGroup className="list-group-flush">  
                                    <ListGroupItem>Marca || {product.marca}</ListGroupItem>
                                    <ListGroupItem>Modelo || {product.modelo}</ListGroupItem>
                                </ListGroup>
                            <Card.Body>                         
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

           
            </Container>
            
        </div>
    )
}

export default ItemDetail
