import React from 'react'
import { Col, Container, Row, Image} from 'react-bootstrap'
import { useCartContext } from '../../Context/cartContext';

const Cart = () => {

    const { CartList, vaciarCarrito } = useCartContext();



    //mapeo en el CartList del producto
    return (
        <div>
            { CartList.map(product => 
            <Container >
                <Row>
                    <Col xs={1}>
                               <Image style={{ width: '100%' }} src={product.img}/>
                            </Col>
                    <Col>
                    Nombre = {product.name}
                    </Col>
                    <Col>
                    Cantidad = {product.cantidad}
                    </Col>
                    <Col>precio = ${ product.price }</Col>
                    <Col></Col>
                </Row>    
                <Row>
                </Row>
            </Container>
            )
        }
        <button onClick={ vaciarCarrito }>Vaciar Carrito</button>
        </div>
            )
        }
            
            


                    // <Col key={product.id}>
                    // {product.name}
export default Cart
