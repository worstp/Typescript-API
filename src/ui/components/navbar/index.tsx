import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const NavBar: React.FC = () => {
    return <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Project</Navbar.Brand>
                <Nav className="justify-content-end">
                        <Nav.Link>
                            <Link to="/">
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="search">
                                Search
                            </Link>
                        </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>;
}

export default NavBar;