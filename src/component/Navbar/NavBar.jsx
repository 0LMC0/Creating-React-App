import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav , Navbar, Container } from 'react-bootstrap'
import logo from './assets/img/footshop.png'
import CartWidget from './cartWidget';


const NavBar = () => {
    return (
            <Navbar bg="clear" variant="dark">
             <Container>
                     <Navbar.Brand href="#home">
                       <img
                        src= { logo }
                        width="150"
                        className="d-inline-block align-top"
                        alt="Footshop"
                       />
                     </Navbar.Brand>
                     <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#catalogo">Catalogo</Nav.Link>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                         <CartWidget />
                    </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default NavBar