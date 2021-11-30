import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/home'>Chill Tour</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#packages">Packages</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        {user.email && <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>}
                        {user.email && <Nav.Link as={Link} to="/manageAllOrder">Manage All Order</Nav.Link>}
                        {user.email && <Nav.Link as={Link} to="/addANewPackage">Add A New Package</Nav.Link>}
                        {user.email ? <Button variant="secondary" onClick={logOut}>LogOut</Button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {user.email || <Nav.Link as={Link} to="/register">Register</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: {user.displayName}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;