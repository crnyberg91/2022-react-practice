import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class ProfileNavBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>placeholder</Nav.Link>
                        <Nav.Link>placeholder</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default ProfileNavBar;