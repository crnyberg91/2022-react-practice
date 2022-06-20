import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProfileNavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/teaching' className='nav-link'>Teaching</Link>
                    <Link to='/publications' className='nav-link'>Publications</Link>
                    <Link to='/openProblems' className='nav-link'>OpenProblems</Link>
                    <Link to='/videos' className='nav-link'>Videos</Link>
                    <Link to='/resume' className='nav-link'>Resume</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default ProfileNavBar;



//BOOTSTRAP NAV.Link component as an alternative solution
/* <Nav.Link as={Link} to='/'>Home</Nav.Link>
<Nav.Link as={Link} to='/teaching'>Teaching</Nav.Link>
<Nav.Link as={Link} to='/publications'>Publications</Nav.Link>
<Nav.Link as={Link} to='/openProblems'>OpenProblems</Nav.Link>
<Nav.Link as={Link} to='/videos'>Videos</Nav.Link>
<Nav.Link as={Link} to='/resume'>Resume</Nav.Link> */