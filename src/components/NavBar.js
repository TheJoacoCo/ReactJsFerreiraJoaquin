import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">F1 Merch Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavItem>
                        <NavLink href="#">Ropa</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Accesorios</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Coleccionables</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Ofertas</NavLink>
                    </NavItem>
                </Nav>
                <CartWidget />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
