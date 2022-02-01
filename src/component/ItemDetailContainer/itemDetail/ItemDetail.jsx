import React from 'react'
import { useState } from 'react';
import { Card, ListGroup, ListGroupItem, Container, Image, Row, Col  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../Context/cartContext';
import  ItemCount  from '../../ItemListContainer/ItemCount/ItemCount';

const ItemDetail = ({product}) => {

    //importacion del contexto con la prop value de agregar al carrito
    const {AgregarAlCarrito } = useCartContext();

    //useState para el if de el boton de = agregar al carrito/terminar compra
    const [ show, setShow ] = useState(true)

    //uso del contexto que lllama a la funcion de agregarAlCarrito y setea los productos en el carrito
    const onAdd = (cant) => {
        setShow(false);
        AgregarAlCarrito({ ...product, cantidad : cant});
    }

    return (
        <div>
            <Container>
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
                                <Card.Title className='display-3 mb-5 mt-5'>{product.name}</Card.Title>
                                <Card.Text className='p mb-5 mt-5'>
                                    {product.description}
                                </Card.Text>   
                                <Card.Title className='mb-2 mt-4' >
                                    Precio:
                                </Card.Title>
                                <Card.Text className='display-5 mb-5'>
                                    ${product.price}
                                </Card.Text>
                                    <p>Quedan disponibles = {product.stock}  unidades</p>
                                {/* esto muestra el contador y si no con un if un boton de link al carrito cuando ya se eligio */}
                                    { show ?  <ItemCount  stock={product.stock} onAdd={onAdd} /> : <Link to='/cart'><button className='btn btn-primary w-100'>Terminar la compra</button></Link> }
                                </Card.Body>
                                <ListGroup className="list-group-flush">  
                                    <ListGroupItem>Marca    || {product.marca}</ListGroupItem>
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
