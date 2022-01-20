import { Link } from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav , Navbar, Container, NavDropdown } from 'react-bootstrap'
import logo from './assets/img/footshop.png'
import CartWidget from './cartWidget';


const NavBar = () => {

    return (
            <Navbar bg="clear" variant="dark">
             <Container>
                     <Link to="/">
                       <img
                        src= { logo }
                        width="150"
                        className="d-inline-block align-top"
                        alt="Footshop"
                       />
                     </Link>
                     <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Categorias" id="nav-dropdown">
                          <Link  to='/category/nuevos_modelos'>
                              <li className='text-center'>Nuevos Modelos</li>
                          </Link>
                          <NavDropdown.Divider />
                          <Link to='/category/clasicas'>
                              <li className='text-center'>Clasicas</li>
                          </Link>
                          <NavDropdown.Divider />
                          <Link to='/category/mas_vendidas'>
                              <li className='text-center'>Mas Vendidas</li>
                          </Link>
                          
                         </NavDropdown>
                        <Link to='/cart'> 
                          <CartWidget  />
                        </Link>
                    </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default NavBar