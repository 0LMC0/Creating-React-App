import React, { useState } from 'react'
import { Button, Card, Col, Container, Image, Modal, Row } from 'react-bootstrap';
import { useCartContext } from '../../Context/cartContext';
import { BiX } from "react-icons/bi"
import { Link } from 'react-router-dom';
import  { addDoc, collection, getFirestore } from 'firebase/firestore'
import { TextValidator, ValidatorForm} from 'react-material-ui-form-validator'


const CartItem =  () => {
    
    const { CartList, vaciarCarrito, nPrecio, nCantidad, borrarItem } = useCartContext();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const [OrdenId, setOrdenId] = useState('')

    const [DataForm, setDataForm] = useState({
        email: '',
        telefono: '',
        nombre: ''
    })
    const realizarCompra = async (e ) =>{
        e.preventDefault();
        let orden = {}

            orden.comprador =  DataForm
            orden.total = nPrecio
  
            orden.items = CartList.map (CartItems => {
              const id = CartItems.id;
              const name = CartItems.name;
              const price = CartItems.price
              const cantidad = CartItems.cantidad
  
              return{id, name, price, cantidad}
  
            })
            //guarda la orden en firestore
            const dataBase = getFirestore();
            const orderCollection = collection(dataBase, 'orders');
            await addDoc(orderCollection, orden)
            .then(res => setOrdenId(res.id))
            .catch(err => console.log(err))
            .finally(() => vaciarCarrito())
        }
            

            
        
        function handleChange(e) {
            e.preventDefault()
            setDataForm({
                ...DataForm, 
                [e.target.name]: e.target.value
                
            }
            )
        }

  return (
    <div>

        { nCantidad !== 0 ? 
        <Container className="border border-primary">
            <Row className='mx-5 mt-3'>
                <Col>
                    <p>Imagen</p>
                </Col>
                <Col>
                    <p> Nombre</p>
                </Col>
                <Col>
                    <p>Cantidad</p>
                </Col>
                <Col>
                    <p>Borrar Item</p>
                </Col>
                <Col>
                    <p> Precio unitario</p>
                </Col>
            </Row>
            <hr />
          { CartList.map(product => 
                    <Row key={product.id} className='m-5'>
                        <Col xs={2}>
                                   <Image style={{ width: '50%' }} src={product.img}/>
                                </Col>
                        <Col>
                            <p className='h4 m-4'>
                            {product.name}
                            </p>
                        </Col>
                        <Col>
                        <p className='h4 m-4'>
                            {product.cantidad}
                            </p>
                        </Col>
                        <Col >
                        <button className='btn btn-danger m-4' onClick={ () => borrarItem(product.id) }> <BiX/> </button>
                        </Col>
                        <Col className='text-center h5 pt-4'>
                             ${ product.price }
                        </Col>
                        <hr />
                    </Row>
                )
            }
            <hr />
            <div className="d-flex justify-content-evenly mb-3">
            <div className='h5'>
                    Total de Unidades = { nCantidad }
            </div>
            <div>
            <Link to='/'>
                <button className='btn btn-secondary m-3'>Seguir comprando...</button>
            </Link>
            <Button className='btn btn-primary' onClick={ vaciarCarrito }>Vaciar Carrito</Button>
            </div>
                <Button variant="primary" onClick={handleShow}>
                    Terminar compra
                </Button>
            <div className='h5'>
                   Precio Total = ${ nPrecio }
            </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Terminando tu compra...</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                        <h4>proporcionanos tus datos y un representante se estara comunicando en breve!</h4>
                        
                    <ValidatorForm onSubmit={ realizarCompra }
                    className='d-flex flex-column'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Nombre</span>
                        <TextValidator
                         type="text"
                         name='nombre' 
                          placeholder='Tu nombre'
                          validators={["required"]}
                          errorMessages={["El campo es requerido"]}
                          onChange={handleChange}
                          value={DataForm.nombre} required/>
                          
                        </div>
                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">E-mail</span>
                        <TextValidator
                            type="email"
                            name='email' 
                            placeholder='Tu E-mail' 
                            validators={["required"]}
                          errorMessages={["El campo es requerido"]}
                            onChange={handleChange}
                            value={DataForm.email}
                            required
                            />
                        </div>
                        <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Telefono</span>
                        <TextValidator

                            type="number"
                             name='telefono'
                              placeholder='Tu telefono'
                              validators={["required"]}
                          errorMessages={["El campo es requerido"]}
                              onChange={handleChange}
                                value={DataForm.telefono}
                                
                                />
                        </div>
                    <button className="btn btn-primary" type='submit'>
                            Realizar compra
                        </button>
                    </ValidatorForm> 
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>

                   
                    </Container>

                    :
                    OrdenId === '' ?
                    <Container>
                    <Card className="text-center">
                    <Card.Header>Carrito vacio</Card.Header>
                    <Card.Body>
                      <Card.Title className='m-5 display-4'>
                        No has añadido ningun producto a tu carrito de compras 
                      </Card.Title>
                      <Card.Title className='mb-5'>
                
                          {/* Para volver a la pagina principal hace click en el boton de aca debajo! */}
                      </Card.Title>
                      <Link to="/">
                       <span className='btn btn-primary'>Volver a la pagina principal</span>
                      </Link>
                    </Card.Body>
                    <Card.Footer className="text-muted">Footshop</Card.Footer>
                  </Card>
                    </Container>
                    :

                    <Container>
                    <Card className="text-center">
                    <Card.Header>Carrito vacio</Card.Header>
                    <Card.Body>
                      <Card.Title className='m-5 display-4'>
                      La orden de su pedido es 
                      </Card.Title>
                      <Card.Title className='mb-5'>
                                < h3 className='display-1'>{OrdenId } </h3>
                      </Card.Title>
                      <h2 className='my-5'>Muchas gracias por su compra!</h2>
                      <Link to="/">
                       <span className='btn btn-primary'>Volver a la pagina principal</span>
                      </Link>
                    </Card.Body>
                    <Card.Footer className="text-muted">Footshop</Card.Footer>
                  </Card>
                    </Container>
}


    </div>

  )
}

export default CartItem