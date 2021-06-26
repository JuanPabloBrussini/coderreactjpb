import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logocuponp.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar(props) {
  return (
    <div className="App">
      <Navbar bg="white" expand="lg">
      <Nav.Link href="#"><img src={logo} alt='logo empresa' width='100%'/></Nav.Link>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="#">Inicio</Nav.Link>
          <Nav.Link href="#">Quienes Somos</Nav.Link>
           <Nav.Link href="#">Gastronomia</Nav.Link>
            <Nav.Link href="#">Cuidado Personal</Nav.Link>
              <NavDropdown title="Moda" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Hombre</NavDropdown.Item>
              <NavDropdown.Item href="#">Mujer</NavDropdown.Item>
              <NavDropdown.Item href="#">Niños</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hogar-Deco" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Muebles</NavDropdown.Item>
              <NavDropdown.Item href="#">Electrodomésticos</NavDropdown.Item>
              <NavDropdown.Item href="#">Bicicletas</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Cuidado Personal</NavDropdown.Item>
              <NavDropdown.Item href="#">Hogar</NavDropdown.Item>
              <NavDropdown.Item href="#">Profesionales</NavDropdown.Item>
              <NavDropdown.Item href="#">Mecanicos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Mas" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Panaderias</NavDropdown.Item>
              <NavDropdown.Item href="">Delivery</NavDropdown.Item>
            </NavDropdown>     
            <Nav.Link href="#">Contacto</Nav.Link>      
            <Nav.Link href="#"><CartWidget/></Nav.Link>          
        
            </Nav>          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;
